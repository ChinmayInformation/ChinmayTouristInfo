/**
 * 
 */
"use strict";

module.exports = function(app) {

const Moment          = require('moment');
const Botmaster       = require('botmaster');
const MessengerBot    = require('botmaster-messenger');
const SocketioBot     = require('botmaster-socket.io');
const botmaster       = new Botmaster({server : app});
const WatsonConversationWare = require('botmaster-watson-conversation-ware');
const {fulfillOutgoingWare} = require('botmaster-fulfill');
const SessionWare     = require('botmaster-session-ware');

const messengerSettings = {
  credentials: {
    verifyToken: 'tourist_information',
    pageToken: 'EAAE9yAdQNWcBAA3q8jbJtPZCLd3yS2gszoDlpFAkRYbU6jHcI5uWFssNynKb7k1Gic3NFcsYCutMnwuAlJcBXaOzlPk1VCB5c1ZA4ryVx2jhrXZC3sckeXQxFkQGX4E263Ego2QDX8D5JEB0VyWbM9MYAxfF9jQuqRPgcMooJXPeM5iYsBd',
    fbAppSecret: 'c13364b6f3595e001acabda4ce4dd875'
  },
  webhookEndpoint: 'webhook'  // botmaster will mount this webhook on https://Your_Domain_Name/messenger/webhook
};
const messengerBot = new MessengerBot(messengerSettings);


const watsonConversationWareOptions = {
  settings: {
    "username": "09ac434f-0801-46ef-807f-30821f24de3d",
    "password": "7HCrkJcMFzOr",
    version: 'v1', // as of this writing (01 Apr 2017), only v1 is available
    version_date: '2017-02-03' // latest version-date as of this writing
  },
  workspaceId: "20c2f105-d8f1-4a0d-bad0-5ee87bffca70" // As provided by Watson Conversation
};
const watsonConversationWare = WatsonConversationWare(watsonConversationWareOptions);


const sessionWare = SessionWare();
botmaster.useWrapped(sessionWare.incoming, sessionWare.outgoing);
botmaster.use(watsonConversationWare);

botmaster.use({
    type: 'incoming',
    name: 'my-awesome-middleware',
    controller: (bot, update) => {
        // console.log("incoming update",update);
        // console.log("incoming bot",bot);

        // console.log('',update.message.mid);
        // watsonUpdate.output.text is an array as watson can reply with a few
        // messages one after another
        return bot.sendTextCascadeTo(update.watsonUpdate.output.text, update.sender.id);
    }
});



const actions = require('./controller.js');

botmaster.use({
    type: 'outgoing',
    name: 'fulfill-middleware',
    controller: fulfillOutgoingWare({actions})
});


// SOCKET.IO Settings
const socketioSettings = {
    id: 'thisBot',
    server: app, // this is required for socket.io. You can set it to another node server object if you wish to. But in
                  // this example, we will use the one created by botmaster under the hood
};
const socketioBot = new SocketioBot(socketioSettings);

botmaster.addBot(socketioBot);
botmaster.addBot(messengerBot);

};

