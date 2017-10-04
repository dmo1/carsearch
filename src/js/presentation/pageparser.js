/*
 * Page parser
 * Performs page parsing and initialization of components
 */

var app = app || {};
app.modules = app.modules || [];

app.modules["pageparser"] = function (searchFieldContainer) {
  if ( !app.state ) {
    return;
  }
  app.state.on(app.state.APP_START, init);

  var components = [],
    filterInputs;

  function init() {
    initComponents();
  }

  function initComponents() {
    var componentElements = document.querySelectorAll("[data-component]"),
      i;

    for (i = 0; i < componentElements.length; i++) {
      var element = componentElements[i],
        componentName = element.getAttribute("data-component"),
        component;

      if (app.modules[componentName]) {
        component = app.modules[componentName].createNew(element);
        components.push(component);

        if (element.getAttribute("data-filter-component")) {
          filterInputs.push(component);
        }
      }
    }

    searchFieldContainer.init(filterInputs);
  }
};
