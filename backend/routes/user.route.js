const router = require("express").Router();
const controller = require("../controllers/user.controller");


module.exports = (app) => {
    router.get("/", controller.get);
    router.get("/:id", controller.getOne);
    router.post("/", controller.create);
    router.patch("/", controller.update);
    router.delete("/:id", controller.delete);
    app.use("/api/users", router);
};