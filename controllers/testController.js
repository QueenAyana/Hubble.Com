
class test{
    constructor(){
    }
    testFunction(req,res){
        res.json({"this is a test":"Ttest"});
    }
}

module.exports = new test();