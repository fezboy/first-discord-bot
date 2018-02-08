const Discord = require('discord.io');
const auth = {token: process.env.AUTH_TOKEN} || require('./auth.json');

console.log(auth.token);

var client = new Discord.Client({
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
