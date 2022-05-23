const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info'),
	async execute(interaction) {
		await interaction.reply(`User name: ${interaction.user.tag} \n Id: ${interaction.user.id}`);
		await interaction.user.send(`User name: ${interaction.user.tag} \n Id: ${interaction.user.id}`)
	},
};