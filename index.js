const Discord = require('discord.io');

require('dotenv').config();
const token = process.env.AUTH_TOKEN;

var client = new Discord.Client({
	autorun: true,
	token: token
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
