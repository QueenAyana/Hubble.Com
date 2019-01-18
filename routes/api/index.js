const router = require("express").Router();
const testController = require('./../../controllers/testController');
const userRoutes = require('./userRoutes');
// /api/test
router.use('/test', testController.testFunction);
router.use('/user', userRoutes);

router.use(function(req, res){
    res.json({"api":"true"});
})

module.exports = router;