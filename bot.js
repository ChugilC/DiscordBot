const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.login(process.env.TOKEN);

client.on('ready', () => {
	console.log("I'm Back");
});

// Message Event
const commandHandler = require('./commands');
client.on('message', commandHandler);
