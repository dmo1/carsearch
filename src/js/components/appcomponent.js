/*
 * Application component
 * Manages the presentation of the whole page
 */

var app = app || {};
app.modules = app.modules || [];

app.modules["appcomponent"] = function() {
  var componentFactory = {
    createNew: function(element) {
      return element;
    }
  }

  function addOption(select, value, text) {
      var option = document.createElement("option");
      option.text = text;
      option.value = value;
      select.appendChild(option);
  }

  return componentFactory;
};
