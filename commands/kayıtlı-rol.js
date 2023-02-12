const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"kayıt-rol",
    description: 'Kayıt rol ayarlarsın!',
    type:1,
    options: [
        {
            name:"rol",
            description:"Lütfen bir rol etiketle!",
            type:8,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "**<:Kirmizi:1033666667181527062> | Bu komutu kullanabilmek için `Yönetici` yetkisine ihtiyacın var!**", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    db.set(`kayıtlı_${interaction.guild.id}`, rol.id)
    interaction.reply({content: "**<:Yesil:1033666717974548500> | Kayıt Rolü Başarıyla <@&"+rol+"> Olarak Ayarlandı.**"})
}

};