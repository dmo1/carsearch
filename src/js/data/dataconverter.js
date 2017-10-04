/*
 * Data converter service
 * Converts raw DataProvider data to DataModel format
 */

var app = app || {};
app.modules = app.modules || [];

app.modules["dataConverter"] = function () {
  var dataSet = [];

  var publicInterface = {
    convert: function(remoteData) {
      var data,
        i;

      if (!remoteData || !remoteData.length) {
        return 0;
      }

      for (i = 0; i < remoteData.length; i++) {
        data = {};
        data.color = getSafely("color", "");
        data.model = getSafely("type", "");
        data.year = parseInt( getSafely("yearOfConstruction", ""), 2 );
        data.price = parseInt( getSafely("price", ""), 2 );
        data.notes = getSafely("notes", "");
        dataSet.push(data);
      }
    }
  };

  function getSafely(data, propertyName, defaultValue) {
    return data.hasOwnProperty(propertyName) ? data[propertyName] : defaultValue;
  }

  return publicInterface;
};
