// Burger.js 
// ############################# //
// Connects back to the orm.js file
// ############################# //
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            console.log("js tetx 2");
            cb(res);
        });
},
    create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res){
        console.log("js test");
        cb(res);
    });
},
    update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res){
        console.log("orm.js");
        cb(res);
    });
    
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res){
            console.log("orm test");
            cb(res);
        });
        
        }
};
// ############################# //
// Exporting the burgerQuery to controller file
// ############################# //
module.exports = burger;