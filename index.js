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
        .setState('invite My Bot')
        .setName('HBD To Me.')
        .setDetails('Join My Bot Support Server')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1187377061959045181/1215063569578721333/22714827862d17e1a1a78bd344bfc5fc.jpg?ex=65fb6321&is=65e8ee21&hm=9c8262b8d6178831f8ad6cfe1dab9bb0efdd0cf9e1a092c470d354fb798778b8&')
        .addButton('Support Server', 'https://discord.com/invite/SvF8YyQtgw')
        .addButton('Invite My Bot', 'https://discord.com/oauth2/authorize?client_id=1211738857192816681&permissions=68608&scope=bot+applications.commands');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
