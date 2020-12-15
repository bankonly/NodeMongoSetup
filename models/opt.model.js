const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG_MODEL } = require("./utils/common-func");

const model_name = "otp";
const schema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    expire_time: {
      type: Date,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    resend_count: {
      type: Number,
      default: 0,
    },
    resend_after: {
      type: Date,
      required: true,
    },
    allow_to_reset: {
      type: Boolean,
      default: false,
    },
  },
  DB_TIMESTAMP_CONFIG_MODEL
);

const OtpModel = mongoose.model(model_name, schema, model_name);

module.exports = OtpModel;
module.exports.model_name = model_name;
