const router = require("express").Router();
const apiRoutes = require('./api');

router.use("/api", apiRoutes);

router.use(function (req, res) {
    res.json({ "json": "test" });
})

module.exports = router;