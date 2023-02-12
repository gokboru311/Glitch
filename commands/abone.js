const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"abone",
    description: 'Belirtilen Kişiye Abone Rolü Verir',
    type:1,
    options: [
        {
            name:"user",
            description:"Abone rolü vereceğin kullanıcıyı etiketle!",
            type:6,
            required:true
        },
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "**<:Kirmizi:1033666667181527062> | Bu komutu kullanabilmek için `Rolleri Yönet` yetkisine ihtiyacın var!**", ephemeral: true})
    const user = interaction.options.getMember('user')
let kayıtlı = db.fetch(`kayıtlı_${interaction.guild.id}`)
if (!kayıtlı) return interaction.reply("**<:Kirmizi:1033666667181527062> | Abone rolü ayarlanmamış!**")
interaction.guild.members.cache.get(user.id).roles.add(kayıtlı)

    interaction.reply({content: `**<:Yesil:1033666717974548500> | Başarıyla ${user} Adlı Kullanıcıya \`Abone\` Rolü Verildi!**`})
}

};