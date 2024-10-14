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
        .setName('a Competition')
        .setDetails('To win your heart')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1233503643500675252/1295274070564143179/c7ce50ce-fbbe-4589-a0e4-0c47a8d982ce.png?ex=670e0d7b&is=670cbbfb&hm=fafbf458627f68c0d61bcf6b9650ac33ae0d7b49d26863a34fdc1356c303e0e2&')
        .setStartTimestamp(Date.now())
        .addButton('My Website', 'https://files-box.vercel.app/');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });

});

client.login(process.env.TOKEN);
