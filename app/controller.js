/**
 * Botmaster actions:  
 *   <restaurant/>  -  restaurant lookup using cuisine and location
 *   <route/>       -  get route based on start and destination
 *   <attraction/>  -  attraction lookup using type and location
 */
"use strict";

const actions = require('botmaster-fulfill-actions');
const dbFunctions = require("./database.js");


actions.restaurant = {
  controller : function(params) { 
    console.log("watsonupdate", params.update.watsonUpdate);
    return dbFunctions.getRestaurant(params.update.watsonUpdate.context)
      .then((result) => {
        if(result.rows.length>0) {          
          params.update.watsonUpdate.context.cuisine = null;
          params.update.watsonUpdate.context.location = null;
          // for just now return 1st entry but ideally we should provide a list or all (or top 3) found
          console.log("searchResult",result.rows);
          return result.rows[0].fields.name;
        } else {          
          return "non found"; 
        }        
      }).catch((err) => {
        console.log("err",err);
        return "oops";
      });
  }
};

actions.route = {
  controller : function(params) {

  }
};

actions.attraction = {
  controller : function(params) {

  }
};

module.exports = actions;
