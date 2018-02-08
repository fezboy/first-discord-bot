const Discord = require('discord.io');
const aws = require('aws-sdk');

let auth = new aws.s3({
  token: process.env.AUTH_TOKEN
});

if (!auth.token){
	const auth = require('./auth.json');
}

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
