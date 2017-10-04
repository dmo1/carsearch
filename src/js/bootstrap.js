/*
 * Bootstrapping module
 */
var app = app || {};
app.modules = app.modules || [];

(function() {

    document.addEventListener("DOMContentLoaded", init);

    function init() {
      if ( !app.state ) {
        console.error("State module not found!");
        return;
      }

      for (key in app.modules) {
        if (app.modules.hasOwnProperty(key)) {
          app.modules[key] = initModule(key);
        }
      }

      app.state.emit(app.state.APP_START);
    }

    function initModule(moduleName) {
      var dataProvider = app.modules["dataprovider"],
        dataConverter = app.modules["dataconverter"],
        dataFilter = app.modules["datafilter"],
        searchFieldContainer = app.modules["searchfieldcontainer"];

      switch (moduleName) {
        case "datamodel":
            return app.modules[moduleName](dataProvider, dataConverter, dataFilter);
          break;
        case "pageparser":
            return app.modules[moduleName](searchFieldContainer);
          break;
        default:
          return;
      }
    }

})();
