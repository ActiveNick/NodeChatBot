var builder = require('botbuilder');

// Create the connector:
// ConsoleConnector allows us to communicate with our bot directly via the command window.
// Standard bots should normally use the ChatConnector instead to support many channels.
var connector = new builder.ConsoleConnector().listen();

// Create the bot:
// UniversalBot works with all connectors and all channels.
var bot = new builder.UniversalBot(connector);

// Add in the dialog:
// Dialogs have names that act like a path, this is our 'root' dialog.
bot.dialog('/', function(session) {
    // Send a message to the user via the user session.
    session.send('Hello, my name is NodeChatBot')
});