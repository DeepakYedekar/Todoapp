const cors = require("cors");
const allowedOrigins = require("./allowedOrigins");

// remove !origin from if statement for production
const corsOption = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = { corsConfig: cors(corsOption) };
