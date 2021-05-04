import { getController } from "../controllers/downloadController";

const routes = (app) => {
  app.route("/download").get(getController);
};

export default routes;
