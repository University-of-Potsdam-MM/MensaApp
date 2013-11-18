$(document).ready(function () {
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
});

$(document).on("pageinit", "#start", function () {
    $("#location-menu").bind("change", function (event, ui) {
        updateMenu();
    });
});

$(document).on("pageshow", "#start", function () {
    updateMenu();
});

function updateMenu() {
    var mensa = $("#location-menu option:selected").val();

    Q(clearMenu())
        .then(function () { return loadMenu(mensa); })
        .then(function (menu) {
            var meals = Q(selectMeals(menu))
                .then(sortMealsByDate)

            var icons = Q(selectIcons(menu))
                .then(convertToMap);

            return [meals, icons];
        })
        .spread(prepareMeals)
        .then(filterEmptyMeals)
        .then(drawMeals)
        .catch(function (e) {
            alert("Fehlschlag: " + JSON.stringify(e));
        });
}

function clearMenu() {
    $("#todaysMenu").empty();
}

/**
 * Loads all meals and some meta data for a given mensa.
 * @param location One of the values ["Griebnitzsee", "NeuesPalais", "Golm"]
 */
function loadMenu(location) {
    var d = Q.defer();
    var url = "http://fossa.soft.cs.uni-potsdam.de:8280/services/mensaParserJSON";

    // If we are not in an app environment, we have to use the local proxy
    if (navigator.app === undefined) {
        url = "/fossa-services/mensaParserJSON";
    }

    $.get(url + "/readCurrentMeals?location=" + location).done(d.resolve).fail(d.reject);
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

/**
 * Prepare data for day section.
 * @param icons
 * @returns {Function}
 */
function mapToDay(icons) {
    return function (day) {
        var dayData = {};
        dayData.title = new Date(day.key).toLocaleDateString();
        dayData.contentId = _.uniqueId("id_");
        dayData.meals = _.chain(day.value.item).sortBy(sortByAnzeigeprio).map(mapToMeal(icons)).value();
        return dayData;
    }
}

function sortByAnzeigeprio(element) {
    return element.anzeigeprio;
}

function mapToMeal(icons) {
    return function (meal) {
        var mealData = {};
        mealData.title = meal.titel;
        mealData.description = meal.beschreibung;
        mealData.prices = meal.preise.entry[0].value + "€ / " + meal.preise.entry[1].value + "€ / " + meal.preise.entry[2].value + "€";

        mealData.ingredients = [];
        if ($.isArray(meal.essenstyp)) {
            for (var typIndex in meal.essenstyp) {
                mealData.ingredients.push(icons[meal.essenstyp[typIndex]]);
            }
        } else {
            mealData.ingredients.push(icons[meal.essenstyp]);
        }

        return mealData;
    };
}

/**
 * Prepare data.
 * @param meals
 * @param icons
 */
function prepareMeals(meals, icons) {
    return _.map(meals, mapToDay(icons));
}

/**
 * Filter a meal if its description is empty.
 * @param days
 * @returns {Array|*|j.map}
 */
function filterEmptyMeals(days) {
    return _.map(days, function (day) {
        day.meals = _.filter(day.meals, function (meal) {
            return meal.description != "";
        });
        return day;
    });
}

function drawMeals(days) {
    var dayTemplate = $("#meal-template").clone().html();
    var createDay = _.template(dayTemplate);

    // Add day section to html
    _.each(days, function (dayData) {
        var htmlDay = createDay(dayData);
        $("#todaysMenu").append(htmlDay);
    })

    // Tell collapsible set to refresh itself
    $("#todaysMenu").collapsibleset("refresh");

    // Open the first section
    $("#" + days[0].contentId).trigger('expand');
}
