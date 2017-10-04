/*
 * Data filter
 * Performs filtering of the model dataset
 */

var app = app || {};
app.modules = app.modules || [];

app.modules["datafilter"] = function (model) {

  if ( !app.state ) {
    return;
  }

  var filteredData;

  app.state.on(app.state.FILTER_DATA_CHANGED, filterDataSet);

  function filterDataSet(filterValues) {
    var fullData = model.getFullData();

    filter(fullData, filterValues, onFilteredDataReady);
  }

  function filter(fullData, filterValues, callback) {
    callback(fullData);
  }

  function onFilteredDataReady(filteredSet) {
    filteredData = filteredSet;

    app.state.emit(app.state.SEARCH_RESULTS_UPDATED, filteredData);
  }
};
