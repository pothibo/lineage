// Generated by CoffeeScript 1.4.0
(function() {
  var Chat;

  chrome.app.Components.Chat = Chat = (function() {

    Chat.prototype.whisperRegex = /^"{1}(\w+)\s(.*)$/;

    function Chat() {
      Lineage.templates.get("templates/chat.html", this);
      this.history = {
        normal: [],
        whisper: [],
        global: [],
        clan: [],
        trade: []
      };
    }

    Chat.prototype.html = function(html) {
      if (arguments.length === 0) {
        return this.html.value;
      }
      this.html.value = $(html);
      return this.html.value;
    };

    Chat.prototype.loaded = function() {
      $("#game").append(this.html());
      this.$types = this.html().find("ul.types");
      this.$types.children(".global").addClass("active");
      return this.$active = this.$types.children(".active");
    };

    Chat.prototype.received = function(packet) {
      return this.update(packet.type(), this.compile(packet));
    };

    Chat.prototype.compile = function(packet) {
      if (packet.type() === "whisper") {
        if ((packet.tid != null) && packet.tid() === 9) {
          return $("<li>" + (packet.message()) + "</li>");
        } else {
          return $("<li>" + (packet.character()) + ": " + (packet.message()) + "</li>");
        }
      } else {
        return $("<li>" + (packet.message()) + "</li>");
      }
    };

    Chat.prototype.update = function(type, $li) {
      var $el;
      $el = this.html().find("." + type);
      this.history[type].splice(0, 0, $li);
      if (this.$active.hasClass(type)) {
        return this.html().find(".history").prepend($li);
      } else if (!$el.hasClass("unseen")) {
        return $el.addClass("unseen");
      }
    };

    Chat.prototype.toggle = function($element) {
      this.html().find(".active").removeClass("active");
      $element.addClass("active").removeClass("unseen");
      this.$active = $element;
      return this.html().find(".history").html(this.history[$element.attr("type")]);
    };

    Chat.prototype.send = function(type, message) {
      var content, packet;
      packet = chrome.app.Packets.Chat(type.capitalize());
      if (type !== "whisper") {
        packet.type(type);
        packet.message(message);
      } else {
        content = this.whisperRegex.exec(message);
        packet.message(content.pop());
        packet.target(content.pop());
      }
      return packet.onReady(Lineage.socket.send);
    };

    return Chat;

  })();

}).call(this);
