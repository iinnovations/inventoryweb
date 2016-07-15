// JavaScript Document

// Set static variables for controlstatus query
// These are aliases to be interpreted on the server.

var stockdatabase = 'stockdb';
var bomsdatabase = 'bomsdb';
var ordersdatabase = 'ordersdb';
var inventoriesdatabase = 'inventoriesdb';
var assembliesdatabase = 'assembliesdb';

// utilities

function pickerDateTimeToDateTimeString(pickerdate, time) {
    // We are converting 07/21/2016 to 2016-07-11 23:41:39
    if (pickerdate) {
        time = time || '00:00:00';
        var datesplit = pickerdate.split('/');
        var newdate = datesplit[2] + '-' + datesplit[0] + '-' + datesplit[1] + ' ' + time;
    }
    else {
        newdate = '';
    }

    return newdate

}

function dateTimeStringToPickerTime(datetimestring) {
    if (datetimestring) {
        var split = datetimestring.split(/\s+/); // multiple spaces are ok.
        var datestringsplit = split[0].split('-');
        var timestring = split[1];
        var newdatestring = datestringsplit[1] + '/' + datestringsplit[2] + '/' + datestringsplit[0]
    }
    else {
        var timestring = '';
        var datestring = '';
    }
    return {timestring:timestring, datestring:newdatestring}
}


function addUserMeta(options, sessiondata){
    options.pathalias = sessiondata.usermeta.pathalias;
    options.username = sessiondata.username;
    options.hpass = sessiondata.hpass;
    // We don't need to pass the keywords. We will grab these from the database and
    // do the authentication on this side.
    return options
}

function reloadItemDataFromStock(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=options.callback || logdone;
    options.action='reloaditemdatafromstock';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

// Stock

function addEditPart(options) {
//    console.log('trying to render stock')
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderStock;
    options.tablename='stock';
    options.action='addeditpart';
    options.database=stockdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function copyPart(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderStock;
    options.tablename='stock';
    options.action='copypart';
    options.database=stockdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function deleteParts(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderStock;
    options.tablename='stock';
    options.action='deleteparts';
    options.database=stockdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function getAndRenderStock(options) {
    options=options || {};
    options=addUserMeta(options,sessiondata)
    options.callback=renderStockResponse;
    options.tablename='stock';
    options.database=stockdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

// BOMs

function deletePartsFromBOM(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderBOMs;
    options.action='deletepartsfrombom';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function deleteBOMs(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderBOMs;
    options.action='deleteboms';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function addEditBOM(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderBOMs;
    options.action='addeditbom';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function addEditBOMPart(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderBOMs;
    options.action='addeditbompart';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function copyBOM(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderBOMs;
    options.action='copybom';
    options.database=bomsdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function getAndRenderBOMs(options) {
    options=options || {};
    options=addUserMeta(options,sessiondata)
    options.callback=renderBOMsResponse;
    options.tablename='metadata';
    options.database=bomsdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function getAndRenderSelectedBOM(options){
    options=options || {};
    options=addUserMeta(options,sessiondata)
    options.callback=renderBOMResponse;
    options.tablename=uisettings.activebomname;
    options.database=bomsdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function getAndRenderBOMCalcs(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=renderBOMCalcs;
    options.action='getbomcalcs';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

// Assemblies

function deletePartsFromAssembly(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderAssemblies;
    options.action='deletepartsfromassembly';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function deleteAssemblies(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderAssemblies;
    options.action='deleteassemblys';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function addEditAssembly(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderAssemblies;
    options.action='addeditassembly';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function addEditAssemblyPart(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderAssemblies;
    options.action='addeditassemblypart';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function copyAssembly(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderAssemblies;
    options.action='copyassembly';
    options.database=assembliesdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function getAndRenderAssemblies(options) {
    options=options || {};
    options=addUserMeta(options,sessiondata)
    options.callback=renderAssembliesResponse;
    options.tablename='metadata';
    options.database=assembliesdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function getAndRenderSelectedAssembly(options){
    options=options || {};
    options=addUserMeta(options,sessiondata)
    options.callback=renderAssemblyResponse;
    options.tablename=uisettings.activeassemblyname;
    options.database=assembliesdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function getAndRenderAssemblyCalcs(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=renderAssemblyCalcs;
    options.action='getassemblycalcs';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

// Inventory
function getAndRenderInventories(options) {
    options=options || {};
    options=addUserMeta(options,sessiondata)
    options.callback=renderInventoriesResponse;
    options.tablename='metadata';
    options.database=inventoriesdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function getAndRenderSelectedInventory(options){
    options=options || {};
    options=addUserMeta(options,sessiondata)
    options.callback=renderInventoryResponse;
    options.tablename=uisettings.activeinventoryname;
    options.database=inventoriesdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function editInventory(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderInventories;
    options.action='editinventory';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function addInventory(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderInventories;
    options.action='addinventory';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function deleteInventories(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderInventories;
    options.action='deleteinventories';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}
function addEditInventoryPart(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderInventories;
    options.action='addeditinventorypart';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function deletePartsFromInventory(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderInventories;
    options.action='deletepartsfrominventory';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}


// Orders
function getAndRenderOrders(options) {
    options=options || {};
    options=addUserMeta(options,sessiondata)
    options.callback=renderOrdersResponse;
    options.tablename='metadata';
    options.database=ordersdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function getAndRenderSelectedOrder(options){
    options=options || {};
    options=addUserMeta(options,sessiondata)
    options.callback=renderOrderResponse;
    options.tablename=uisettings.activeordername;
    options.database=ordersdatabase;
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function editOrder(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderOrders;
    options.action='editorder';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function addOrder(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderOrders;
    options.action='addorder';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function addEditOrderPart(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderOrders;
    options.action='addeditorderpart';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function deletePartsFromOrder(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderOrders;
    options.action='deletepartsfromorder';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}

function deleteOrders(options) {
    options=options || {};
    options=addUserMeta(options, sessiondata);
    options.callback=getAndRenderOrders;
    options.action='deleteorders';
    options.url='/wsgiinventory';
	wsgiCallbackTableData(options)
}




