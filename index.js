const Discord = require('discord.io');
const auth = require('./auth.json');
var client = Discord.Client({
	autorun: true,
	token: auth.token
});

client.on('ready', function(event) {
	console.log("Let's do dis!");
});

client.on('message', function(user, userID, channelID, message, event) {
	if (message === "ping"){
		client.sendMessage({
			to: channelID,
			message: "pong"
		});
	}
});
