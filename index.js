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
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1187377061959045181/1243454749890711634/d0664f4c8d73e803e801e6edeed1f409.jpg?ex=665188fa&is=6650377a&hm=53409735ca646aa350f012612d3cd2c6b36aefe2c5290f609d4bc3192a402e1e&')
        .addButton('my community server', 'https://discord.com/invite/H6Gv3ftYFU')

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
