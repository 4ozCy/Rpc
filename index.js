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
        .setState('excuse me do you have a name, or should i call you mine instead')
        .setName('Nothing')
        .setDetails('pls go visit my website')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1187377061959045181/1243454749890711634/d0664f4c8d73e803e801e6edeed1f409.jpg?ex=665188fa&is=6650377a&hm=53409735ca646aa350f012612d3cd2c6b36aefe2c5290f609d4bc3192a402e1e&')
        .addButton('join my community server', 'https://discord.com/invite/H6Gv3ftYFU')
        .addButton('Invite my bot', 'https://discord.com/oauth2/authorize?client_id=1230988193650835477');
        .addButton('visit my website', 'link-bypass.netlify.app')

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
