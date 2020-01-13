var _ = require('lodash');
var log = require('../core/log.js');

var method = {};

method.init = function() {

};

method.check = function(candle){

};

method.update = function(candle) {
  log.info('Low: ' + candle.low);
  if (this.lastBuy == null) {
    this.lastBuy = candle.low;
    this.advice('long');
    return;
  }

  if (candle.low >= this.lastBuy * 1.0025) {
    log.info('Trigger Short');
    this.advice('short');
  } else if (candle.low <= this.lastBuy * 0.9975) {
    log.info('Trigger Long');
    this.lastBuy = candle.low;
    this.advice('long');
  }

};

module.exports = method;
