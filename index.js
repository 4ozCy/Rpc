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
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1187377061959045181/1224362471670812722/62f9e83690075ebc5c0d4c46ce6bf04e.jpg?ex=661d3768&is=660ac268&hm=646598b1b9bf1fd50d3362506dff1667ce90db8b88eec625c4b804f77cd5c0b3&')
        .addButton('My Community Server', 'https://discord.com/invite/H6Gv3ftYFU')
        .addButton('Invite my bot', '');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
