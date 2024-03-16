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
        .setName('The Hunt: First Edition.')
        .setDetails('Join My Bot Support Server')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1187377061959045181/1218696970290335874/Screenshot_2024_0317_060626.png?ex=66089b00&is=65f62600&hm=57110e7a31de8218bdf8f63f233125f6fe7654a658594a87a7e7b195215d7560&')
        .addButton('Support Server', 'https://discord.com/invite/SvF8YyQtgw')
        .addButton('Invite My Bot', 'https://discord.com/oauth2/authorize?client_id=1211738857192816681&permissions=68608&scope=bot+applications.commands');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
