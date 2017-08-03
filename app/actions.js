/**
 * Created by frederickmacgregor on 18/05/2017.
 */
"use strict";


const actions = require('botmaster-fulfill-actions');


// leaving this in as an example of how to add a new action that calls mongodb (note mongodb setup is not included in this app).

// const Order = require('mongoose').model('Order')
// function makeOrder(params){
//     console.log("makeOrder", params.update.watsonUpdate.context);
//     let context = params.update.watsonUpdate.context;
//     let time = Moment().add(3, "days");
//
//     let object = {
//         product : context.sku,
//         size : context.size,
//         deliveryDate : time
//     };
//     params.update.watsonUpdate.context.sku = null;
//     params.update.watsonUpdate.context.size = null;
//     console.log("object", object);
//     return Order.create(object);
// }

// actions.makeOrder = {
//     controller : function (params) {
//         return makeOrder(params)
//             .then((result)=>{
//                 console.log("makeOrder result", result);
//                 return 'and your order number is: ' + result._id;
//             }).catch((err)=>{
//                 return "I'm afraid that didn't work. We didn't put in your order..."
//             });
//     }
// };

/*
 * To query this index, use the database .search() method. The first argument is the design document name, followed by 
 * the index name, and finally an object with your search parameters.
 *
  db.search('library', 'books', {q:'author:dickens'}, function(er, result) {
  if (er) {
    throw er;
  }

  console.log('Showing %d out of a total %d books by Dickens', result.rows.length, result.total_rows);
  for (var i = 0; i < result.rows.length; i++) {
    console.log('Document id: %s', result.rows[i].id);
  }
});

Or see https://stackoverflow.com/questions/41061434/how-to-do-a-simple-find-on-cloudant

 */



module.exports = actions;