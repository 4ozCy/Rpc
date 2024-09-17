const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ readyStatus: false, checkUpdate: false });
const keepAlive = require('./server.js');
keepAlive();

let startTime = Date.now();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - made by: @nozcy.`);

    setInterval(() => {
        let currentTime = Date.now();
        let elapsedTime = Math.floor((currentTime - startTime) / 1000);
        let hours = Math.floor(elapsedTime / 3600);
        let minutes = Math.floor((elapsedTime % 3600) / 60);
        let seconds = elapsedTime % 60;

        let formattedTime;
        if (hours > 0) {
            formattedTime = `${hours} hour${hours > 1 ? 's' : ''}, ${minutes} minute${minutes > 1 ? 's' : ''}`;
        } else if (minutes > 0) {
            formattedTime = `${minutes} minute${minutes > 1 ? 's' : ''}, ${seconds} second${seconds > 1 ? 's' : ''}`;
        } else {
            formattedTime = `${seconds} second${seconds > 1 ? 's' : ''}`;
        }

        const r = new Discord.RichPresence()
            .setApplicationId('1107744228773220473')
            .setType('COMPETING')
            .setState('To win your heart')
            .setName('Tournament')
            .setDetails(`Elapsed: ${formattedTime}`)
            .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1233503643500675252/1256997956637425674/c7ce50ce-fbbe-4589-a0e4-0c47a8d982ce.png')
            .addButton('My Website', 'https://file-hosting.onrender.com');

        client.user.setActivity(r);
        client.user.setPresence({ status: 'dnd' });
    }, 10000);
});

client.login(process.env.TOKEN);
