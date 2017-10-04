/*
 * Data model object
 * Stores and manages the application data
 */

var app = app || {};
app.modules = app.modules || [];

app.modules.datamodel = function (dataProvider, dataConverter, dataFilter) {

  if ( !app.state ) {
    return;
  }
  app.state.on(app.state.APP_START, init);

  var fullData,
    filteredData;

  function init() {
    reFetchData();
  }

  function reFetchData() {
    dataProvider.getData(onDataReady);
  }

  function onDataReady(rawData) {
    fullData = dataConverter.convert(rawData);

    if (fullData) {
      app.state.emit(app.state.DATA_READY, fullData);
    }
  }

  app.state.on(app.state.FILTER_DATA_CHANGED, filterDataSet);

  function filterDataSet(filterValues) {
    dataFilter.filter(fullData, filterValues, onFilteredDataReady);
  }

  function onFilteredDataReady(filteredSet) {
    filteredData = filteredSet;

    app.state.emit(app.state.SEARCH_RESULTS_UPDATED, filteredData);
  }
};
