const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - made by: @nozcy.`);

    const r = new Discord.RichPresence()
        .setApplicationId('1107744228773220473')
        .setType('PLAYING')
        .setURL('https://zcyy-website.vercel.app')
        .setState('pls join my community server')
        .setName('Nothing')
        .setAssetsLargeImage('https://discords.com/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Femojis%2F819233017243107358.png%3Fv%3D1&w=128&q=75')
        .addButton('my community server', 'https://discord.com/invite/H6Gv3ftYFU')

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
