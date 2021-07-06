const fetch = require('node-fetch');

module.exports = async function(msg) {
	let tokens = msg.content.split(' ');

	if (tokens[0] === 'hi') {
		msg.reply('Hello there !');
	} else if (msg.content === 'tell me a joke') {
		const response = await fetch('https://icanhazdadjoke.com/', {
			headers: {
				Accept: 'application/json'
			}
		});
		const joke = await response.json();
		msg.reply(joke.joke);
	} else if (msg.content === 'good night') {
		msg.reply('Good night, Get some rest');
	} else if (msg.content == 'good morning') {
		msg.reply('Good Morning Sunshine!');
	} else if (tokens[0] === 'gif') {
		let keyword = 'avengers';
		if (tokens.length > 1) {
			keyword = tokens.slice(1, tokens.length).join(' ');
		}
		let url = `https://g.tenor.com/v1/search?q=${keyword}&key=${process.env.TENORKEY}&ContentFilter=high`;
		let response = await fetch(url);
		let json = await response.json();
		const index = Math.floor(Math.random() * json.results.length);
		msg.reply(json.results[index].url);
	} else if (tokens[0] == 'weather') {
		let keyword = 'Chennai';
		if (tokens.length > 1) {
			keyword = tokens.slice(1, tokens.length).join(' ');
		}
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=${process.env
			.WEATHER}&units=metric`;
		let response = await fetch(url);
		let json = await response.json();
		console.log(json);

		msg.reply(`Temperature is ${json.main.temp}°C and Humidity is ${json.main.humidity}%`);
	} else if (msg.content == 'age') {
		let dob = new Date('03/09/2000');
		let month_diff = Date.now() - dob.getTime();
		let age_dt = new Date(month_diff);
		let year = age_dt.getUTCFullYear();
		let age = Math.abs(year - 1970);
		msg.reply(`I'm ${age} years old`);
	} else if (msg.content == 'bye') {
		msg.reply('Bye Bye ☺');
	} else if (msg.content === 'thank you') {
		msg.reply('Glad to help');
	}
};
