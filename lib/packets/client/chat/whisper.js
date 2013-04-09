// Generated by CoffeeScript 1.4.0
(function() {
  var ChatPacket,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  chrome.app.Packets.Chat.Whisper = ChatPacket = (function(_super) {

    __extends(ChatPacket, _super);

    function ChatPacket() {
      this["package"] = __bind(this["package"], this);
      ChatPacket.__super__.constructor.call(this, 92, ["message", "target"]);
    }

    ChatPacket.prototype.message = function() {
      if (arguments.length === 0) {
        return;
      }
      return this.process(arguments[0], "message");
    };

    ChatPacket.prototype.target = function() {
      if (arguments.length === 0) {
        return;
      }
      return this.process(arguments[0], "target");
    };

    ChatPacket.prototype.length = function() {
      return ChatPacket.__super__.length.apply(this, arguments) + this.message().length + this.target().length;
    };

    ChatPacket.prototype["package"] = function(buffer) {
      buffer.join(this.target(), 1);
      return buffer.join(this.message(), this.target().length + 1);
    };

    return ChatPacket;

  })(Packet);

}).call(this);