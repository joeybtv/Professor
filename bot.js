const data = require('./data.json');
const BOT_USER = 'joeybottv';
const BOT_TOKEN = 'oauth:1yxllhe5freh6j2mb7c7ne7y3ih2gl';

const twitchOptions = {
  identity: {
    username: BOT_USER,
    password: BOT_TOKEN
  },
  channels: [
    "joeybtv"
  ]
};

// use either Brain.js or NLP.js, most likely NLP

const tmi = require('tmi.js');
const twitchClient = new tmi.client(twitchOptions);

twitchClient.connect().then(res => {
  twitchClient.join("#joeybottv").then(res => {
    console.log("joeybtv's chat has been joined!");
    console.log(data[(Math.floor(Math.random() * data.length + 1))]['Pokemon Name'].replace(/"/g, ''));

  });
});


twitchClient.on("message", function (from, context, message, self) {
  if (self || !message.startsWith('?')) return;
  
  const args = message.slice(1).split(' ');
	const command = args.shift().toLowerCase();

  if (command === 'fact') twitchClient.say(from, 'joeybtRun can totally beat ' + randomPokemon + ' in a battle');

});

randomPokemon = data[(Math.floor(Math.random() * data.length + 1))]['Pokemon Name'].replace(/"/g, '') + ' & ' + data[(Math.floor(Math.random() * data.length + 1))]['Pokemon Name'].replace(/"/g, '');