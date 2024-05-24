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
        .setType('PLAYING')
        .setURL('https://zcyy-website.vercel.app')
        .setState('Why is nothing is nothing and nothing is nothing')
        .setName('Nothing')
        .setDetails('Rose Are Red, Violets Are Blue, Im Asian')
        .setAssetsLargeImage('https://files.catbox.moe/ijfwce.jpg')
        .addButton('join my community server', 'https://discord.com/invite/H6Gv3ftYFU')
        .addButton('Invite my bot', 'https://discord.com/oauth2/authorize?client_id=1230988193650835477');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
