const { PermissionsBitField } = require("discord.js");
module.exports = {
    name:"kick",
    description: 'Kullanıcıyı Sunucudan Atarsın.',
    type:1,
    options: [
        {
            name:"user",
            description:"Atılacak Kullanıcıyı Seçin.",
            type:6,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({content: "**<:Kirmizi:1033666667181527062> | Bu komutu kullanabilmek için `Yönetici` yetkisine ihtiyacın var!**", ephemeral: true})
    const user = interaction.options.getMember('user')
    if(user.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({content:"**<:Kirmizi:1033666667181527062> | Bu Kullanıcının Kullanıcıları Atma Yetkisi Olduğu İçin Onu Yasaklayamadım.**   ",ephemeral:true})
    user.kick();
    interaction.reply({content: "**<:Yesil:1033666717974548500> | Başarıyla Üyeyi Attım!**"})
}

};