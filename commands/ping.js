const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Botun pingini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;


    interaction.reply({ embeds: [ new EmbedBuilder()
    .setAuthor({ name: `Güncel Ping | Uptier!`, iconURL: 'https://cdn.discordapp.com/attachments/1073270142328381512/1073899889756491776/Letter-UP-Arrow-Business-Logo-Design-Graphics-23957850-1-580x387.jpg' })
    .setDescription(`• Gecikme değerleri anlık olarak gösterilir, zamanla bu değerler değişebilir.\n\n**• Soket Gecikmesi:** \`143\`\n**• Veritabanı Gecikmesi:** \`${client.ws.ping}\`\n**• Veritabanı Durumu:** \`Bağlı\``)
    .setFooter({ text: `Uptier`, iconURL: 'https://cdn.discordapp.com/attachments/1073270142328381512/1073899889756491776/Letter-UP-Arrow-Business-Logo-Design-Graphics-23957850-1-580x387.jpg' })
    .setColor("000000")], ephemeral: true })

  }

};