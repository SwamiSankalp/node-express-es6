import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DownloadSchema = new Schema({
  name: {
    type: String,
    required: "File Name required",
  },
  age: {
    type: String,
    required: "path is required.",
  },
});

export default DownloadSchema;
