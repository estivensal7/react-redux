const router = require("express").Router();
const itemRoutes = require("./items");

router.use("/item", itemRoutes);

module.exports = router;
