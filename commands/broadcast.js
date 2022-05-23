const { SlashCommandBuilder } = require('@discordjs/builders');
const { IntegrationApplication } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('broadcast')
		.setDescription('Sends a broadcast to all members of the group'),
	async execute(interaction) {
        try {
			await interaction.reply('working...');
			let collection = interaction.guild.members.cache ;
			//console.log(collection);
			collection
				.filter(userInstance => !userInstance.user.bot)
 				.each(memberInstance => {
					 memberInstance.send("This is a broadcast message").then(msg => {
						 console.log(msg);
						 console.log(`Sent message: ${msg.content}, to a member`)
					 })
				 });
		} catch (error) {
			await interaction.user.send('Broadcast could not complete.')
			console.log('Error: ', error);
		}
	},
};