// Generated by CoffeeScript 1.4.0
(function() {
  var Background;

  chrome.app.Engine.Background = Background = (function() {

    function Background(html) {
      this.$html = $(html);
      this.loaded = true;
    }

    Background.prototype.html = function() {
      return this.$html;
    };

    return Background;

  })();

}).call(this);
