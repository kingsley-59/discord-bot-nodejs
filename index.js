const fs = require('node:fs');
// Require the necessary discord.js classes
const { Collection } = require('discord.js');
const client = require('./config/client');
const {respondToInteraction} = require('./event-controllers/index');

client.commands = new Collection();

// read commands directory, filter js files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// set commands by looping through commandFiles
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
  //console.log(c.guilds.cache.get('966655032130932806'));
});

client.on('messageCreate', msg => {
    if (msg?.author.bot) return false; 

    if (msg.guild && msg.content.startsWith('/private')) {
        let text = msg.content.slice('/private'.length); // cuts off the /private part
        console.log(text);
        msg.guild.members.list();
        return;
      }

    console.log(`${msg.author.username}: ${msg.content}`);
    msg.reply(`I heard you. You said "${msg.content}"`);
})

client.on('interactionCreate', interaction => respondToInteraction(interaction));




// Login to Discord with your client's token
// client.login(TOKEN);