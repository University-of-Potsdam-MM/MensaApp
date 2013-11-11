//
// Definitions for schema: http://mensaParser.provider.elis.unipotsdam.de/
//  http://fossa.soft.cs.uni-potsdam.de:7000/mensaParser-1.0/ws?xsd=1
//
//
// Constructor for XML Schema item {http://mensaParser.provider.elis.unipotsdam.de/}speiseplan
//
function mensaParser_provider_elis_unipotsdam_de__speiseplan () {
    this.typeMarker = 'mensaParser_provider_elis_unipotsdam_de__speiseplan';
    this._campus = null;
    this._gerichte = null;
    this._iconHashMap = null;
}

//
// accessor is mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.getCampus
// element get for campus
// - element type is {http://mensaParser.provider.elis.unipotsdam.de/}campusTyp
// - optional element
//
// element set for campus
// setter function is is mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.setCampus
//
function mensaParser_provider_elis_unipotsdam_de__speiseplan_getCampus() { return this._campus;}

mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.getCampus = mensaParser_provider_elis_unipotsdam_de__speiseplan_getCampus;

function mensaParser_provider_elis_unipotsdam_de__speiseplan_setCampus(value) { this._campus = value;}

mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.setCampus = mensaParser_provider_elis_unipotsdam_de__speiseplan_setCampus;
//
// accessor is mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.getGerichte
// element get for gerichte
// - element type is null
// - required element
//
// element set for gerichte
// setter function is is mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.setGerichte
//
function mensaParser_provider_elis_unipotsdam_de__speiseplan_getGerichte() { return this._gerichte;}

mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.getGerichte = mensaParser_provider_elis_unipotsdam_de__speiseplan_getGerichte;

function mensaParser_provider_elis_unipotsdam_de__speiseplan_setGerichte(value) { this._gerichte = value;}

mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.setGerichte = mensaParser_provider_elis_unipotsdam_de__speiseplan_setGerichte;
//
// accessor is mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.getIconHashMap
// element get for iconHashMap
// - element type is null
// - required element
//
// element set for iconHashMap
// setter function is is mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.setIconHashMap
//
function mensaParser_provider_elis_unipotsdam_de__speiseplan_getIconHashMap() { return this._iconHashMap;}

mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.getIconHashMap = mensaParser_provider_elis_unipotsdam_de__speiseplan_getIconHashMap;

function mensaParser_provider_elis_unipotsdam_de__speiseplan_setIconHashMap(value) { this._iconHashMap = value;}

mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.setIconHashMap = mensaParser_provider_elis_unipotsdam_de__speiseplan_setIconHashMap;
//
// Serialize {http://mensaParser.provider.elis.unipotsdam.de/}speiseplan
//
function mensaParser_provider_elis_unipotsdam_de__speiseplan_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._campus != null) {
      xml = xml + '<campus>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._campus);
      xml = xml + '</campus>';
     }
    }
    // block for local variables
    {
     xml = xml + this._gerichte.serialize(cxfjsutils, 'gerichte', null);
    }
    // block for local variables
    {
     xml = xml + this._iconHashMap.serialize(cxfjsutils, 'iconHashMap', null);
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

mensaParser_provider_elis_unipotsdam_de__speiseplan.prototype.serialize = mensaParser_provider_elis_unipotsdam_de__speiseplan_serialize;

function mensaParser_provider_elis_unipotsdam_de__speiseplan_deserialize (cxfjsutils, element) {
    var newobject = new mensaParser_provider_elis_unipotsdam_de__speiseplan();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing campus');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'campus')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCampus(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing gerichte');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = mensaParser_provider_elis_unipotsdam_de__gerichte_deserialize(cxfjsutils, curElement);
    }
    newobject.setGerichte(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing iconHashMap');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = mensaParser_provider_elis_unipotsdam_de__iconHashMap_deserialize(cxfjsutils, curElement);
    }
    newobject.setIconHashMap(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Simple type (enumeration) {http://mensaParser.provider.elis.unipotsdam.de/}essensTyp
//
// - Schwein
// - Vegan
// - Vegetarisch
// - Rind
// - Fisch
// - Huhn
//
// Constructor for XML Schema item {http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMealsResponse
//
function mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse () {
    this.typeMarker = 'mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse';
    this._return = null;
}

//
// accessor is mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse.prototype.getReturn
// element get for return
// - element type is {http://mensaParser.provider.elis.unipotsdam.de/}speiseplan
// - optional element
//
// element set for return
// setter function is is mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse.prototype.setReturn
//
function mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_getReturn() { return this._return;}

mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse.prototype.getReturn = mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_getReturn;

function mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_setReturn(value) { this._return = value;}

mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse.prototype.setReturn = mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_setReturn;
//
// Serialize {http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMealsResponse
//
function mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      xml = xml + this._return.serialize(cxfjsutils, 'return', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse.prototype.serialize = mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_serialize;

function mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_deserialize (cxfjsutils, element) {
    var newobject = new mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = mensaParser_provider_elis_unipotsdam_de__speiseplan_deserialize(cxfjsutils, curElement);
     }
     newobject.setReturn(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Simple type (enumeration) {http://mensaParser.provider.elis.unipotsdam.de/}zusatzstoffeTyp
//
// - Farbstoff
// - Konservierungsstoffe
//
// Constructor for XML Schema item {http://mensaParser.provider.elis.unipotsdam.de/}MensaNotAvailable
//
function mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable () {
    this.typeMarker = 'mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable';
    this._message = null;
}

//
// accessor is mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable.prototype.setMessage
//
function mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_getMessage() { return this._message;}

mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable.prototype.getMessage = mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_getMessage;

function mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_setMessage(value) { this._message = value;}

mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable.prototype.setMessage = mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_setMessage;
//
// Serialize {http://mensaParser.provider.elis.unipotsdam.de/}MensaNotAvailable
//
function mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._message != null) {
      xml = xml + '<message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</message>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable.prototype.serialize = mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_serialize;

function mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_deserialize (cxfjsutils, element) {
    var newobject = new mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing message');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'message')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMessage(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMeals
//
function mensaParser_provider_elis_unipotsdam_de__readCurrentMeals () {
    this.typeMarker = 'mensaParser_provider_elis_unipotsdam_de__readCurrentMeals';
    this._location = '';
}

//
// accessor is mensaParser_provider_elis_unipotsdam_de__readCurrentMeals.prototype.getLocation
// element get for location
// - element type is {http://mensaParser.provider.elis.unipotsdam.de/}campusTyp
// - required element
//
// element set for location
// setter function is is mensaParser_provider_elis_unipotsdam_de__readCurrentMeals.prototype.setLocation
//
function mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_getLocation() { return this._location;}

mensaParser_provider_elis_unipotsdam_de__readCurrentMeals.prototype.getLocation = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_getLocation;

function mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_setLocation(value) { this._location = value;}

mensaParser_provider_elis_unipotsdam_de__readCurrentMeals.prototype.setLocation = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_setLocation;
//
// Serialize {http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMeals
//
function mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<location>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._location);
     xml = xml + '</location>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

mensaParser_provider_elis_unipotsdam_de__readCurrentMeals.prototype.serialize = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_serialize;

function mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_deserialize (cxfjsutils, element) {
    var newobject = new mensaParser_provider_elis_unipotsdam_de__readCurrentMeals();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing location');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setLocation(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://mensaParser.provider.elis.unipotsdam.de/}gericht
//
function mensaParser_provider_elis_unipotsdam_de__gericht () {
    this.typeMarker = 'mensaParser_provider_elis_unipotsdam_de__gericht';
    this._anzeigeprio = 0;
    this._beschreibung = null;
    this._essenstyp = [];
    this._preise = null;
    this._titel = null;
    this._zusatzstoffe = null;
}

//
// accessor is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getAnzeigeprio
// element get for anzeigeprio
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for anzeigeprio
// setter function is is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setAnzeigeprio
//
function mensaParser_provider_elis_unipotsdam_de__gericht_getAnzeigeprio() { return this._anzeigeprio;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getAnzeigeprio = mensaParser_provider_elis_unipotsdam_de__gericht_getAnzeigeprio;

function mensaParser_provider_elis_unipotsdam_de__gericht_setAnzeigeprio(value) { this._anzeigeprio = value;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setAnzeigeprio = mensaParser_provider_elis_unipotsdam_de__gericht_setAnzeigeprio;
//
// accessor is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getBeschreibung
// element get for beschreibung
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for beschreibung
// setter function is is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setBeschreibung
//
function mensaParser_provider_elis_unipotsdam_de__gericht_getBeschreibung() { return this._beschreibung;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getBeschreibung = mensaParser_provider_elis_unipotsdam_de__gericht_getBeschreibung;

function mensaParser_provider_elis_unipotsdam_de__gericht_setBeschreibung(value) { this._beschreibung = value;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setBeschreibung = mensaParser_provider_elis_unipotsdam_de__gericht_setBeschreibung;
//
// accessor is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getEssenstyp
// element get for essenstyp
// - element type is {http://mensaParser.provider.elis.unipotsdam.de/}essensTyp
// - required element
// - array
// - nillable
//
// element set for essenstyp
// setter function is is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setEssenstyp
//
function mensaParser_provider_elis_unipotsdam_de__gericht_getEssenstyp() { return this._essenstyp;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getEssenstyp = mensaParser_provider_elis_unipotsdam_de__gericht_getEssenstyp;

function mensaParser_provider_elis_unipotsdam_de__gericht_setEssenstyp(value) { this._essenstyp = value;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setEssenstyp = mensaParser_provider_elis_unipotsdam_de__gericht_setEssenstyp;
//
// accessor is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getPreise
// element get for preise
// - element type is null
// - required element
//
// element set for preise
// setter function is is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setPreise
//
function mensaParser_provider_elis_unipotsdam_de__gericht_getPreise() { return this._preise;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getPreise = mensaParser_provider_elis_unipotsdam_de__gericht_getPreise;

function mensaParser_provider_elis_unipotsdam_de__gericht_setPreise(value) { this._preise = value;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setPreise = mensaParser_provider_elis_unipotsdam_de__gericht_setPreise;
//
// accessor is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getTitel
// element get for titel
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for titel
// setter function is is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setTitel
//
function mensaParser_provider_elis_unipotsdam_de__gericht_getTitel() { return this._titel;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getTitel = mensaParser_provider_elis_unipotsdam_de__gericht_getTitel;

function mensaParser_provider_elis_unipotsdam_de__gericht_setTitel(value) { this._titel = value;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setTitel = mensaParser_provider_elis_unipotsdam_de__gericht_setTitel;
//
// accessor is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getZusatzstoffe
// element get for zusatzstoffe
// - element type is {http://mensaParser.provider.elis.unipotsdam.de/}zusatzstoffeTyp
// - optional element
//
// element set for zusatzstoffe
// setter function is is mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setZusatzstoffe
//
function mensaParser_provider_elis_unipotsdam_de__gericht_getZusatzstoffe() { return this._zusatzstoffe;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.getZusatzstoffe = mensaParser_provider_elis_unipotsdam_de__gericht_getZusatzstoffe;

function mensaParser_provider_elis_unipotsdam_de__gericht_setZusatzstoffe(value) { this._zusatzstoffe = value;}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.setZusatzstoffe = mensaParser_provider_elis_unipotsdam_de__gericht_setZusatzstoffe;
//
// Serialize {http://mensaParser.provider.elis.unipotsdam.de/}gericht
//
function mensaParser_provider_elis_unipotsdam_de__gericht_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<anzeigeprio>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._anzeigeprio);
     xml = xml + '</anzeigeprio>';
    }
    // block for local variables
    {
     if (this._beschreibung != null) {
      xml = xml + '<beschreibung>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._beschreibung);
      xml = xml + '</beschreibung>';
     }
    }
    // block for local variables
    {
     if (this._essenstyp != null) {
      for (var ax = 0;ax < this._essenstyp.length;ax ++) {
       if (this._essenstyp[ax] == null) {
        xml = xml + '<essenstyp xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<essenstyp>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._essenstyp[ax]);
        xml = xml + '</essenstyp>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + this._preise.serialize(cxfjsutils, 'preise', null);
    }
    // block for local variables
    {
     if (this._titel != null) {
      xml = xml + '<titel>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._titel);
      xml = xml + '</titel>';
     }
    }
    // block for local variables
    {
     if (this._zusatzstoffe != null) {
      xml = xml + '<zusatzstoffe>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zusatzstoffe);
      xml = xml + '</zusatzstoffe>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

mensaParser_provider_elis_unipotsdam_de__gericht.prototype.serialize = mensaParser_provider_elis_unipotsdam_de__gericht_serialize;

function mensaParser_provider_elis_unipotsdam_de__gericht_deserialize (cxfjsutils, element) {
    var newobject = new mensaParser_provider_elis_unipotsdam_de__gericht();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing anzeigeprio');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setAnzeigeprio(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing beschreibung');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'beschreibung')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setBeschreibung(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing essenstyp');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'essenstyp')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'essenstyp'));
     newobject.setEssenstyp(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing preise');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = mensaParser_provider_elis_unipotsdam_de__preise_deserialize(cxfjsutils, curElement);
    }
    newobject.setPreise(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing titel');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'titel')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTitel(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zusatzstoffe');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'zusatzstoffe')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setZusatzstoffe(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://mensaParser.provider.elis.unipotsdam.de/}gerichtArray
//
function mensaParser_provider_elis_unipotsdam_de__gerichtArray () {
    this.typeMarker = 'mensaParser_provider_elis_unipotsdam_de__gerichtArray';
    this._item = [];
}

//
// accessor is mensaParser_provider_elis_unipotsdam_de__gerichtArray.prototype.getItem
// element get for item
// - element type is {http://mensaParser.provider.elis.unipotsdam.de/}gericht
// - required element
// - array
// - nillable
//
// element set for item
// setter function is is mensaParser_provider_elis_unipotsdam_de__gerichtArray.prototype.setItem
//
function mensaParser_provider_elis_unipotsdam_de__gerichtArray_getItem() { return this._item;}

mensaParser_provider_elis_unipotsdam_de__gerichtArray.prototype.getItem = mensaParser_provider_elis_unipotsdam_de__gerichtArray_getItem;

function mensaParser_provider_elis_unipotsdam_de__gerichtArray_setItem(value) { this._item = value;}

mensaParser_provider_elis_unipotsdam_de__gerichtArray.prototype.setItem = mensaParser_provider_elis_unipotsdam_de__gerichtArray_setItem;
//
// Serialize {http://mensaParser.provider.elis.unipotsdam.de/}gerichtArray
//
function mensaParser_provider_elis_unipotsdam_de__gerichtArray_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._item != null) {
      for (var ax = 0;ax < this._item.length;ax ++) {
       if (this._item[ax] == null) {
        xml = xml + '<item xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._item[ax].serialize(cxfjsutils, 'item', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

mensaParser_provider_elis_unipotsdam_de__gerichtArray.prototype.serialize = mensaParser_provider_elis_unipotsdam_de__gerichtArray_serialize;

function mensaParser_provider_elis_unipotsdam_de__gerichtArray_deserialize (cxfjsutils, element) {
    var newobject = new mensaParser_provider_elis_unipotsdam_de__gerichtArray();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing item');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = mensaParser_provider_elis_unipotsdam_de__gericht_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item'));
     newobject.setItem(item);
     var item = null;
    }
    return newobject;
}

//
// Simple type (enumeration) {http://mensaParser.provider.elis.unipotsdam.de/}preisTyp
//
// - Student
// - Mitarbeiter
// - Gast
//
// Simple type (enumeration) {http://mensaParser.provider.elis.unipotsdam.de/}campusTyp
//
// - Griebnitzsee
// - NeuesPalais
// - Golm
//
// Definitions for schema: null
//  http://localhost/fossa/mensaParser-1.0/ws?wsdl#types1
//
//
// Definitions for service: {http://mensaParser.provider.elis.unipotsdam.de/}mensaParserWs
//

// Javascript for {http://mensaParser.provider.elis.unipotsdam.de/}MensaParser

function mensaParser_provider_elis_unipotsdam_de__MensaParser () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMealsResponse'] = mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_serialize;
    this.globalElementDeserializers['{http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMealsResponse'] = mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_deserialize;
    this.globalElementSerializers['{http://mensaParser.provider.elis.unipotsdam.de/}MensaNotAvailable'] = mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_serialize;
    this.globalElementDeserializers['{http://mensaParser.provider.elis.unipotsdam.de/}MensaNotAvailable'] = mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_deserialize;
    this.globalElementSerializers['{http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMeals'] = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_serialize;
    this.globalElementDeserializers['{http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMeals'] = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_deserialize;
    this.globalElementSerializers['{http://mensaParser.provider.elis.unipotsdam.de/}speiseplan'] = mensaParser_provider_elis_unipotsdam_de__speiseplan_serialize;
    this.globalElementDeserializers['{http://mensaParser.provider.elis.unipotsdam.de/}speiseplan'] = mensaParser_provider_elis_unipotsdam_de__speiseplan_deserialize;
    this.globalElementSerializers['{http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMealsResponse'] = mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_serialize;
    this.globalElementDeserializers['{http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMealsResponse'] = mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_deserialize;
    this.globalElementSerializers['{http://mensaParser.provider.elis.unipotsdam.de/}MensaNotAvailable'] = mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_serialize;
    this.globalElementDeserializers['{http://mensaParser.provider.elis.unipotsdam.de/}MensaNotAvailable'] = mensaParser_provider_elis_unipotsdam_de__MensaNotAvailable_deserialize;
    this.globalElementSerializers['{http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMeals'] = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_serialize;
    this.globalElementDeserializers['{http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMeals'] = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_deserialize;
    this.globalElementSerializers['{http://mensaParser.provider.elis.unipotsdam.de/}gericht'] = mensaParser_provider_elis_unipotsdam_de__gericht_serialize;
    this.globalElementDeserializers['{http://mensaParser.provider.elis.unipotsdam.de/}gericht'] = mensaParser_provider_elis_unipotsdam_de__gericht_deserialize;
    this.globalElementSerializers['{http://mensaParser.provider.elis.unipotsdam.de/}gerichtArray'] = mensaParser_provider_elis_unipotsdam_de__gerichtArray_serialize;
    this.globalElementDeserializers['{http://mensaParser.provider.elis.unipotsdam.de/}gerichtArray'] = mensaParser_provider_elis_unipotsdam_de__gerichtArray_deserialize;
}

function mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_deserializeResponse');
     responseObject = mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

mensaParser_provider_elis_unipotsdam_de__MensaParser.prototype.readCurrentMeals_onsuccess = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_op_onsuccess;

function mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

mensaParser_provider_elis_unipotsdam_de__MensaParser.prototype.readCurrentMeals_onerror = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_op_onerror;

//
// Operation {http://mensaParser.provider.elis.unipotsdam.de/}readCurrentMeals
// Wrapped operation.
// parameter location
// - simple type {http://mensaParser.provider.elis.unipotsdam.de/}campusTyp//
function mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_op(successCallback, errorCallback, location) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = location;
    xml = this.readCurrentMeals_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.readCurrentMeals_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.readCurrentMeals_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'readCurrentMeals';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

mensaParser_provider_elis_unipotsdam_de__MensaParser.prototype.readCurrentMeals = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_op;

function mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_serializeInput(cxfjsutils, args) {
    var wrapperObj = new mensaParser_provider_elis_unipotsdam_de__readCurrentMeals();
    wrapperObj.setLocation(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://mensaParser.provider.elis.unipotsdam.de/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:readCurrentMeals', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

mensaParser_provider_elis_unipotsdam_de__MensaParser.prototype.readCurrentMeals_serializeInput = mensaParser_provider_elis_unipotsdam_de__readCurrentMeals_serializeInput;

function mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = mensaParser_provider_elis_unipotsdam_de__readCurrentMealsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function mensaParser_provider_elis_unipotsdam_de__MensaParser_mensaParser_provider_elis_unipotsdam_de__MensaParserPort () {
  this.url = 'http://fossa.soft.cs.uni-potsdam.de:7000/mensaParser-1.0/ws';
}
mensaParser_provider_elis_unipotsdam_de__MensaParser_mensaParser_provider_elis_unipotsdam_de__MensaParserPort.prototype = new mensaParser_provider_elis_unipotsdam_de__MensaParser;
