/*
 * Search field components container
 * Manages search field components data and state
 */

var app = app || {};
app.modules = app.modules || [];

app.modules["searchfieldcontainer"] = function() {
  var components,
    timeout;

  var publicInterface = {
    init: function(searchFields) {
      var i;

      components = searchFields;

      for (i = 0; i < components.length; i++) {
          components[i].addEventListener("change", onFieldChange);
      }
    }
  }

  function onFieldChange() {
    waitForStableValues();
  }

  function waitForStableValues() {
    clearTimeout(timeout);
    setTimeout(reFilterResults, 100);
  }

  function reFilterResults() {
    var i, filter, filterName, filterValue,
      values = [];

    for (i = 0; i < components.length; i++) {
      filter = {};
      filterName = components[i].dataset.filterComponent;
      filterValue = components[i].value;
      filter[filterName] = filterValue;
      values.push(filter);
    }

    app.state.emit(app.state.FILTER_DATA_CHANGED, values);
  }

  return publicInterface;
};
