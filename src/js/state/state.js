/*
 * App state object
 */

var app = app || {};

app.state = function () {
  var listeners = [];

  var publicInterface = {
    APP_START: "PAGE_READY",
    DATA_READY: "DATA_READY",
    FILTER_DATA_CHANGED: "FILTER_DATA_CHANGED",
    SEARCH_RESULTS_UPDATED: "SEARCH_RESULTS_UPDATED",
    emit: function(eventName, payload) {
        var i, eventListeners, currentListener;

        console.log("event emitted: ", eventName);

        if (listeners[eventName]) {
          eventListeners = listeners[eventName];
          for (i = 0; i < eventListeners.length; i++) {
            currentListener = eventListeners[i];
            currentListener(payload);
          }
        }
    },
    on: function(eventName, handler) {
      if ( !listeners[eventName]) {
        listeners[eventName] = [];
      }
      listeners[eventName].push(handler);
    }
  };

  return publicInterface;
}();
