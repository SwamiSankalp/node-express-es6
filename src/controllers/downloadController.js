import mongoose from "mongoose";
import downloadSchema from "../models/downloadModel";

const Download = mongoose.model("Download", downloadSchema);

// get all downloads from the database
export function getController(req, res) {
  let status = 200;
  let result = [];
  Download.find({}, (error, downloads) => {
    if (!error) {
      result.status = status;
      result.result = downloads;
    } else {
      status = 500;
      result.status = status;
      result.error = error;
    }
    res.status(status).send(result);
  });
}
