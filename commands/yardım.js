const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setAuthor({ name: `Yardım menüsü | Uptier!`, iconURL: 'https://cdn.discordapp.com/attachments/1073270142328381512/1073899889756491776/Letter-UP-Arrow-Business-Logo-Design-Graphics-23957850-1-580x387.jpg' })
    .setThumbnail("https://cdn.discordapp.com/attachments/1073270142328381512/1073899889756491776/Letter-UP-Arrow-Business-Logo-Design-Graphics-23957850-1-580x387.jpg")
    .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.\n\n**<:r_arti:1033844966360879245> | Yenilikler/Güncellemeler**\n• Botlist sistemini yeniledik ve sorunları giderdik. Artık daha kullanışlı. [Daha Fazla Bilgi.](https://discord.gg/3UkqhP79BR)\n\n**<:r_ayarlar:1033687954419367936> | Komutlar [3]**\n**• Botlist -** Komutları İçin Tıkla!\n**• Moderasyon -** Komutları İçin Tıkla!\n**• Kullanıcı -**Komutları İçin Tıkla!\n\n**<:r_dikkat:1037060772284604536> | Bilgilendirme**\n• Katagoriler arasında geçiş yaparak daha fazla bilgiye ulaş.\n• Daha fazla botlist sunucusu istiyosan [Buraya Tıkla.](https://discord.gg/3UkqhP79BR)")
    .setColor("808080")
    .setFooter({ text: `Uptier • ! Binbaşı Özçelik#8311 Net`, iconURL: 'https://cdn.discordapp.com/attachments/1073270142328381512/1073899889756491776/Letter-UP-Arrow-Business-Logo-Design-Graphics-23957850-1-580x387.jpg' })
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setEmoji("<:r_bot:1033846888681722007>")
.setLabel("Botlist")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("kayıt"),
new Discord.ButtonBuilder()
.setEmoji("<:r_mod:1033846559600807996>")
.setLabel("Moderasyon")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("moderasyon"),
new Discord.ButtonBuilder()
.setEmoji("<:r_kullanici:1034207931178168412>")
.setLabel("Kullanıcı")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("Kullanıcı"),
new Discord.ButtonBuilder()
.setEmoji("<:r_link:1034158510851772567>")
.setLabel("Davet Et")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.com/api/oauth2/authorize?client_id=1073288493230456906&permissions=8&scope=bot"),
new Discord.ButtonBuilder()
.setEmoji("<:r_discord:1034208049348485211>")
.setLabel("Destek Sunucusu")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.gg/3UkqhP79BR"),)
interaction.reply({embeds: [embed], components: [row],})
  }

};