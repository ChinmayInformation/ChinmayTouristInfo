/**
 * 
 */
"use strict";

const actions = require('botmaster-fulfill-actions');
const Moment  = require('moment');

function getRestaurant(params) {
  return "MY Nice Cafe";
}

actions.restaurant = {
  controller : function(params) {
    console.log("Request for a restaurant.");
    console.log("Watson context:", JSON.stringify(params.update.watsonUpdate.context));
    // get Restaurant name for
    // params.update.watsonUpdate.location
    // params.update.watsonUpdate.cuisine
    // cloudant api - getRestaurant(location, cuisine);

    return "My Nice Cafe";
  }
};

actions.getRoute = {
  controller : function(params) {

  }
};

actions.getAttraction = {
  controller : function(params) {

  }
};

module.exports = actions;

/*

actions.deliveryChargeForLocation = {
    controller: function (params) {
        return DBFunctions.getLocationByName(params)
            .then((result) => {
                console.log("deliveryCharge called", result);
                if (!result.length) {
                    let returnedString = "Delivery to " + params.update.watsonUpdate.context.location + " should be £2.50, is there anything else you would like to know?";
                    params.update.watsonUpdate.context.location = null;
                    return returnedString;
                }
                let returnedString = "Delivery to " + params.update.watsonUpdate.context.location + " should be £" + result[0].deliveryCharge + ", is there anything else you would like to know?"
                params.update.watsonUpdate.context.location = null;
                return returnedString;
            }).catch((err)=>{
                console.log("err", err);
                return "Deary me it didn't work, sorry."
            });
    }
};

*/