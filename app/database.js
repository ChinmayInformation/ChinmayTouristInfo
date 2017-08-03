/**
 * This module is responsible for all comms with the back end store 
 */


// Load the Cloudant library
var cloudantUrl = "https://10bf2f19-60c2-4e74-b656-da651a2deb1c-bluemix:0a622fbf77126c833ba61e4c61ab2f5b60b17e09da3146cc94cd19d9be3effcd@10bf2f19-60c2-4e74-b656-da651a2deb1c-bluemix.cloudant.com";
var cloudant = require('cloudant')({url: cloudantUrl, plugin: 'promises'});
var dbname    = "info";
var dbInfo = cloudant.db.use(dbname);


function getRestaurant(context) {
  console.log("getRestaurant","Cuisine: '" + context.cuisine + "', location: '" + context.location + "'");
  // build query
  var query = 'attraction:"Restaurant" AND location:"' + context.location + '" AND type:"' + context.cuisine + '"';   
  return dbInfo.search('default','default',{q:query})  
}


module.exports = {
  getRestaurant : getRestaurant
};

