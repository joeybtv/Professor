const BOT_USER = 'joeybottv';
const BOT_TOKEN = 'oauth:xybg19iraeji47uyarw0a1za9iawh6';

const twitchOptions = {
  identity: {
    username: process.env.BOT_USER,
    password: process.env.BOT_TOKEN
  },
  channels: [
    "joeybtv"
  ]
};

const tmi = require('tmi.js');
const twitchClient = new tmi.client(twitchOptions);

twitchClient.connect().then(res => {
  twitchClient.join("#joeybtv").then(res => {
    console.log("joeybtv's chat has been joined!");

    
  });
});


twitchClient.on("message", function (from, context, message, self) {
  if (self) return;
  

});
