const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1107744228773220473')
        .setType('LISTENING')
        .setURL('https://zcyy-website.vercel.app')
        .setState('Bruno Mars is the Best')
        .setName('Bruno Mars')
        .setDetails('Join My Community Server')
        .setAssetsLargeImage('https://files.catbox.moe/4i5zd8.jpg')
        .addButton('My Community Server', 'https://discord.com/invite/WUCm5Hkazq');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
