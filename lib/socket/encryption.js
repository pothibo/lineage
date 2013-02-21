// Generated by CoffeeScript 1.4.0
(function() {

  this.Encryption = (function() {

    function Encryption() {
      this.seed = [1176438083, 2841787186];
    }

    Encryption.prototype.update = function(mask) {
      this.seed[0] ^= mask;
      return this.seed[1] += 0x287EFFC3;
    };

    Encryption.prototype.mask = function(data) {
      return ((data[3] & 0xFF) << 24) | ((data[2] & 0xFF) << 16) | ((data[1] & 0xFF) << 8) | (data[0] & 0xFF);
    };

    Encryption.prototype.keys = function(seed) {
      var keys;
      keys = [];
      for (var i = 0; i < seed.length; i++) {
      keys[(i * 4) + 0] = (seed[i] & 0xFF)
      keys[(i * 4) + 1] = ((seed[i] >> 8) & 0xFF)
      keys[(i * 4) + 2] = ((seed[i] >> 16) & 0xFF)
      keys[(i * 4) + 3] = ((seed[i] >> 24) & 0xFF)
    };

      return keys;
    };

    Encryption.prototype.process = function(data) {
      return data;
    };

    return Encryption;

  })();

}).call(this);