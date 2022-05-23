const { Client, Collection, Intents } = require('discord.js');
require('dotenv').config()
const {TOKEN} = process.env;

// Create a new client instance
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.DIRECT_MESSAGES, 
    // Intents.FLAGS.GUILD_PRESENCES, 
    //Intents.FLAGS.GUILD_MEMBERS
] });
client.commands = new Collection();

client.login(TOKEN);

module.exports = client;