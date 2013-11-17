$(document).ready(function () {
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
});

$(document).on("pageinit", "#start", function () {
    $("#location-menu").bind("change", function (event, ui) {
        var mensa = $("#location-menu option:selected").val();
        alert("Neue Mensa: " + mensa);
    });

    loadMenu("Griebnitzsee")
        .then(function (menu) {
            var meals = Q.when(selectMeals(menu))
                .then(sortMealsByDate)

            var icons = Q.when(selectIcons(menu))
                .then(convertToMap);

            return [meals, icons];
        })
        .spread(drawMeals)
        .fail(function () {
            alert("Fehlschlag");
        });
});

/**
 * Loads all meals and some meta data for a given mensa.
 * @param location One of the values ["Griebnitzsee", "NeuesPalais", "Golm"]
 */
function loadMenu(location) {
    var d = Q.defer();
    $.get("/fossa-services/mensaParserJSON/readCurrentMeals?location=" + location).done(d.resolve).fail(d.reject);
    return d.promise;
}

function selectIcons(menu) {
    return menu.readCurrentMealsResponse.return.iconHashMap.entry;
}

function convertToMap(icons) {
    var result = {};
    for (var index in icons) {
        var key = icons[index].key;
        var value = icons[index].value;
        result[key] = value;
    }
    return result;
}

function selectMeals(menu) {
    return menu.readCurrentMealsResponse.return.gerichte.entry;
}

function sortMealsByDate(meals) {
    return meals.sort(function (a, b) {
        var first = new Date(a.key);
        var second = new Date(b.key);
        return first - second;
    });
}

function drawMeals(meals, icons) {
    var dayTemplate = $("#date-template").clone().html();
    var createDay = _.template(dayTemplate);

    var mealTemplate = $("#meal-template").clone().html();
    var createMeal = _.template(mealTemplate);

    for (var dayIndex in meals) {
        // Prepare data for day section
        var dayData = {};
        dayData.title = meals[dayIndex].key;
        dayData.contentId = _.uniqueId("id_");

        // Add day section to html
        var htmlDay = createDay(dayData);
        $("#todaysMenu").append(htmlDay);

        var dayMeals = meals[dayIndex].value.item;
        for (var mealIndex in dayMeals) {
            var meal = dayMeals[mealIndex];
            var mealData = {};
            mealData.title = meal.titel;
            mealData.description= meal.beschreibung;
            mealData.prices= meal.preise.entry[0].value + "€ / " + meal.preise.entry[1].value + "€ / " + meal.preise.entry[2].value + "€";

            mealData.ingredients=[];
            if ($.isArray(meal.essenstyp)) {
                for (var typIndex in meal.essenstyp) {
                    mealData.ingredients.push(icons[meal.essenstyp[typIndex]]);
                }
            } else {
                mealData.ingredients.push(icons[meal.essenstyp]);
            }

            var htmlMeal = createMeal(mealData);
            $("#" + dayData.contentId).append(htmlMeal);
        }
    }

    // Tell collapsable set to refresh itself
    $("#todaysMenu").collapsibleset("refresh");
}

/**
 * Loads all meals for a given mensa and date.
 * @param date
 * @param location One of the values ["Griebnitzsee", "NeuesPalais", "Golm"]
 * @param onSuccess
 * @param onError
 */
function loadCurrentMeals(date, location, onSuccess, onError) {
    var ws = new mensaParser_provider_elis_unipotsdam_de__MensaParser();
    ws.url = "http://localhost/fossa/mensaParser-1.0/ws?wsdl";
    ws.readCurrentMeals(function (meals) {
        // Filter for given date
        var allMeals = meals.getReturn();
        alert(allMeals);
    }, function (httpStatus, httpStatusText) {
        onError();
    }, location);
}
