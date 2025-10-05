const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ readyStatus: false, checkUpdate: false });
const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rpc started.`);

    const r = new Discord.RichPresence()
        .setApplicationId('1107744228773220473')
        .setType('PLAYING')
        .setName('Roblox')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1187377061959045181/1424025128542670888/a74302ee6ea5e4c27bb472f91c859aba.jpg?ex=68e31aff&is=68e1c97f&hm=1f2d045635b86d11364a0581c56b2ad335a03abcbc7797c034dd8c49a47640fd&')
        .setStartTimestamp(Date.now());
    
    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });

});

client.login(process.env.TOKEN);
