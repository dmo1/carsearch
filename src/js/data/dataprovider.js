/*
 * Data provider service
 */

var app = app || {};
app.modules = app.modules || [];

app.modules.dataprovider = function () {
  var data, dataReadyCallback;

  var publicInterface = {
    getData: function(readyCallback) {
      dataReadyCallback = readyCallback;
      getRemoteData(onRemoteDataReady);
    }
  };

  function onRemoteDataReady(rawData) {
    var transformedData;

    transformedData = rawData; // transform the raw data somehow...
    data = transformedData;

    dataReadyCallback(data);
  }

  function getRemoteData(remoteDataCallback) {
    var rawData = {
      "carStock": [
        {"color": "red", "type": "Porsche 911", "yearOfConstruction": 2000, "price": 60000},
        {"color": "black", "type": "Porsche Panamera", "yearOfConstruction": 2010, "price": 120000},
        {"color": "green", "type": "VW Beetle", "yearOfConstruction": 1960, "price": 8000, "notes": "damaged at the front bumper"},
        {"color": "blue", "type": "Audi A5", "yearOfConstruction": 1998, "price": 28345},
        {"color": "yellow", "type": "Ferrari 430 Spider", "yearOfConstruction": 1990, "price": 80435},
        {"color": "gray", "type": "Audi Commodore", "yearOfConstruction": 1992, "price": 8212}
    ]};

    remoteDataCallback(rawData);
  }

  return publicInterface;
};
