const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"]});

const prefix = "$";

const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log("Bot is onlne")

    client.user.setActivity(`Party party party! Time to party!`,  { type: "PLAYING"})
})

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');
    guildMember.roles.add(welcomeRole);
});

client.on("messageCreate", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        client.commands.get('ping').execute(message, args);
    }

    if (command === "date") {
        var d = new Date();
        console.log(d.toLocaleTimeString());
        console.log(d.toLocaleString());
        message.reply(d.toLocaleDateString());
    }

    if (command === "giverole") {

    }

    if (command === "deafen") {

    }

    if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }

    if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }

    else if (command === 'alcohol' || command === 'drugs'){
        message.delete();
        message.channel.send("Sorry, we don't serve substances here! Try again never!")
    }

    if (command === 'play') {
        client.commands.get('play').execute(message, args);
    }

    if (command === 'leave') {
        client.commands.get('leave').execute(message, args);


    }
});

client.login(config.BOT_TOKEN);
