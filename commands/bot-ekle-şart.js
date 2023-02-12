const { Client, EmbedBuilder } = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
module.exports = {
  name: "botekleme-şart",
  description: "Bot ekleme şartları",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .setThumbnail("https://cdn.discordapp.com/attachments/1073270142328381512/1073899889756491776/Letter-UP-Arrow-Business-Logo-Design-Graphics-23957850-1-580x387.jpg")
    .setAuthor({ name: `Uptier Bot Ekleme Kuralları`, iconURL: 'https://cdn.discordapp.com/attachments/1073270142328381512/1073899889756491776/Letter-UP-Arrow-Business-Logo-Design-Graphics-23957850-1-580x387.jpg' })
    .setDescription("> **:flag_tr: Türkçe Şartlar;**\n> \n> <:r_dikkat:1037060772284604536> | *Botunuz en az 1 hafta önce kurulmalıdır.*\n> <:r_dikkat:1037060772284604536> | *Botunuz en az 10 sunucuda ekli olmalı.*\n> <:r_dikkat:1037060772284604536> | *Botunuzda dm duyuru, özel mesaj gönderme, spam gibi komutlar olmamalıdır.*\n> <:r_dikkat:1037060772284604536> | *Ekleyeceğiniz botun kendinize ait olması gerekmektedir.*\n> \n> **:flag_gb: English Conditions;**\n> \n> <:r_dikkat:1037060772284604536> | *Your bot should be installed at least 1 week ago.*\n> <:r_dikkat:1037060772284604536> | *Your bot must be on at least 10 servers.*\n> <:r_dikkat:1037060772284604536> | *Your bot should not have commands such as dm announcement, private message sending, spam.*\n> <:r_dikkat:1037060772284604536> | *The bot you add must be your own.*")
    .setColor("808080")
    .setFooter({ text: `Uptier • Bot Ekletme Şartları`, iconURL: 'https://cdn.discordapp.com/attachments/1073270142328381512/1073899889756491776/Letter-UP-Arrow-Business-Logo-Design-Graphics-23957850-1-580x387.jpg' })
    interaction.reply({embeds: [embed]})

  }

};