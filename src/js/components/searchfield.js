/*
 * Search field component
 */

var app = app || {};
app.modules = app.modules || [];

app.modules["searchfield"] = function() {
  var componentFactory = {
    createNew: function(element) {
      return element;
    }
  }

  return componentFactory;
};
