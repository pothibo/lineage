// Generated by CoffeeScript 1.4.0
(function() {

  chrome.app.Packets.Chat = function(type) {
    var klass;
    klass = chrome.app.Packets.Chat[type];
    if (klass == null) {
      throw "Error: Couldn't find a chat packet of type " + type;
    }
    return new klass;
  };

}).call(this);