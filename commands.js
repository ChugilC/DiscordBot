const fetch = require('node-fetch');

const jokes = [
	'What do you call a factory that makes okay products? "A satisfactory."',
	'What did the janitor say when he jumped out of the closet? "Supplies!"',
	'What did the ocean say to the beach? "Nothing, it just waved."',
	"I only know 25 letters of the alphabet. I don't know y.",
	'What did the zero say to the eight? "That belt looks good on you."',
	'What has more letters than the alphabet? "The post office!"',
	"Why can't a nose be 12 inches long? Because then it would be a foot.",
	'How do you make 7 even? "Take away the s."',
	"I have a joke about chemistry, but I don't think it will get a reaction.",
	'I once had a dream I was floating in an ocean of orange soda. It was more of a fanta sea.',
	'Have you ever tried to catch a fog? I tried yesterday but I mist.',
	"I've got a great joke about construction, but I'm still working on it.",
	"What's a robot's favorite snack? Computer chips.",
	'My boss told me to have a good day, so I went home.'
];

module.exports = async function(msg) {
	let tokens = msg.content.split(' ');

	if (tokens[0] === 'hi') {
		msg.reply('Hello there !');
	} else if (msg.content === 'tell me a joke') {
		const index = Math.floor(Math.random() * jokes.length);
		msg.reply(jokes[index]);
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
	} else if (msg.content == 'age') {
		let dob = new Date('03/09/2000');
		let month_diff = Date.now() - dob.getTime();
		let age_dt = new Date(month_diff);
		let year = age_dt.getUTCFullYear();
		let age = Math.abs(year - 1970);

		msg.reply(`I'm ${age} years old`);
	} else if (msg.content == 'bye') {
		msg.reply('Bye Bye ☺');
	}
};
