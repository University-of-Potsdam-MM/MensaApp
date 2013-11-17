$(document).ready(function () {
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
});

$(document).on("pageinit", "#start", function () {
    $("#location-menu").bind("change", function (event, ui) {
        var mensa = $("#location-menu option:selected").val();
        alert("Neue Mensa: " + mensa);
    });

    var template = $("#meal-template").clone().html();
    var compiled = _.template(template);

    var htmlMeal = compiled({title: "Angebot 1", description: "Nudeln mit pikanter Paprikasauce und Reibekäse", prices: "1,40€ / 2,50€ / 4,50€", ingredients: ["http://www.studentenwerk-potsdam.de/fileadmin/_sellymenue/_images_alle/_web/menu_label/mais.png", "http://www.studentenwerk-potsdam.de/fileadmin/_sellymenue/_images_alle/_web/menu_label/sau.png", "http://www.studentenwerk-potsdam.de/fileadmin/_sellymenue/_images_alle/_web/menu_label/fisch.png"]});

    $("#todaysMeals").append(htmlMeal);
    $("#todaysMeals").append(htmlMeal);
    $("#todaysMeals").append(htmlMeal);

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
    // Lets have a look
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
