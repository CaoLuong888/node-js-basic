import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  //   router.get("/", (req, res) => {
  //     res.render("test/index.ejs");
  //   });
  router.get("/about", (req, res) => {
    res.send("i am luong");
  });
  return app.use("/", router);
};
export default initWebRoute;
// modele.export = initWebRoute;
