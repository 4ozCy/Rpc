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
            .setStartTimestamp(Date.now)()
            .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1233503643500675252/1256997956637425674/c7ce50ce-fbbe-4589-a0e4-0c47a8d982ce.png?ex=66ea4bd2&is=66e8fa52&hm=6c4243d7cb46548b8b712fbfedc5df421bfaa9e57021c33a177e195a2ba9dca5&')

        client.user.setActivity(r);
        client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
