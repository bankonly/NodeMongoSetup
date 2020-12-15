const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG_MODEL } = require("./utils/common-func");

const model_name = "ExampleSmall";

const schema = new mongoose.Schema(
  {
    field: { type: String, required: true },
    reference: { type: mongoose.Schema.Types.ObjectId, ref: "collection_name" },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG_MODEL
);

const ExampleModel = mongoose.model(model_name, schema, model_name);

module.exports = ExampleModel;
module.exports.ExampleModelName = model_name;
