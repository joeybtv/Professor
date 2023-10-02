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

const tmi = require('tmi.js');
const twitchClient = new tmi.client(twitchOptions);

twitchClient.connect().then(res => {
  twitchClient.join("#joeybottv").then(res => {
    console.log("joeybtv's chat has been joined!");
    console.log(data[(Math.floor(Math.random() * data.length + 1))]['Pokemon Name'].replace(/"/g, ''));

  });
});


twitchClient.on("message", function (from, context, message, self) {
  if (self) return;
  if (context.username == 'joeybtv' && message == '?fact') twitchClient.say(from, 'joeybtRun & PIPLUPMOVIN can totally beat ' + data[(Math.floor(Math.random() * data.length + 1))]['Pokemon Name'].replace(/"/g, '') + ' & ' + data[(Math.floor(Math.random() * data.length + 1))]['Pokemon Name'].replace(/"/g, '') + ' in a battle arlNodders');

});
