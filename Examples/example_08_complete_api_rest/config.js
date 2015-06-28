var winston = require('winston');

exports.jwt_secret = "S0m3ultr4s3cur3s3cr3t"; //Should be ssl-generated key
exports.db_path = 'mongodb://localhost/example_08';
exports.winston_options = {
  transports: [
    new winston.transports.Console({
      colorize: true
    })
  ],
  meta: false,
  msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
  colorStatus: true
};