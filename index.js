const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ readyStatus: false, checkUpdate: false });
const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rpc started.`);

    const r = new Discord.RichPresence()
        .setApplicationId('1107744228773220473')
        .setType('COMPETING')
        .setState('Host by a non-existing person')
        .setName('Tournament')
        .setDetails('To win your heart')
        .setAssetsLargeImage('http://files-box.vercel.app/file/994db.png')
        .setStartTimestamp(Date.now())
        .addButton('My Website', 'https://files-box.vercel.app/');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });

});

client.login(process.env.TOKEN);
