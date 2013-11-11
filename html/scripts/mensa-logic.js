$(document).ready(function(){
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;

    var template = $("#meal-template").clone().html();
    var compiled = _.template(template);

    var htmlMeal = compiled({title: "Angebot 1", description: "Nudeln mit pikanter Paprikasauce und Reibekäse", prices: "1,40€ / 2,50€ / 4,50€", ingredients: ["http://www.studentenwerk-potsdam.de/fileadmin/_sellymenue/_images_alle/_web/menu_label/mais.png", "http://www.studentenwerk-potsdam.de/fileadmin/_sellymenue/_images_alle/_web/menu_label/sau.png", "http://www.studentenwerk-potsdam.de/fileadmin/_sellymenue/_images_alle/_web/menu_label/fisch.png"]});

    $("#todaysMeals").append(htmlMeal);
    $("#todaysMeals").append(htmlMeal);
    $("#todaysMeals").append(htmlMeal);

    loadCurrentMeals("01.11.2013", "Griebnitzsee", null, null);
});

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
    ws.readCurrentMeals(function(meals) {
        // Filter for given date
        var allMeals = meals.getReturn();
        alert(allMeals);
    }, function(httpStatus, httpStatusText) {
        onError();
    }, location);
}
