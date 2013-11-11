$(document).ready(function(){
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;

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
