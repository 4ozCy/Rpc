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
        .setState('Click The Button below to join my server')
        .setName('Nothing')
        .setDetails('pls join My Community Server')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1233503643500675252/1256997956637425674/c7ce50ce-fbbe-4589-a0e4-0c47a8d982ce.png?ex=6682ce12&is=66817c92&hm=76379a7f03b06623c8f9e7cf60f3f42d38a273c3bfffc7d22b917a7f849b60b8&')
        .addButton('click here', 'https://discord.com/invite/tqnDqzmbxE')

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);
