import express from "express";
import routes from "./src/routes/downloadRoutes";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://db123:IplayGTA5@cluster0.asv2e.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`your server is running on ${PORT}`);
});
