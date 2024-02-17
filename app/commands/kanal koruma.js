const Discord = require('discord.js');

exports.run = async (client, message, args,bot) => {

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter(client.user.username,client.user.avatarURL())
.setTimestamp()
.setTitle(`***__${client.user.username} Kanal Koruma Sistemi__***`)
.setDescription(` ***Detaylı Kanal Koruma Sistem Bilgilendirmesi***`)
.addField(`**Açılan Kanal Koruma**`,"*Açılan kanalları otomatik olarak kapatır.*\n*Kanalı açan yetkiliye işlem uygulamaz.* \n `.açılan-kanal-koruma`")
.addField(` **Düzenlenen Kanal Koruma**`,"*Düzenlenen kanalları eski haline getirir.*\n*Düzenleyen yetkiliye işlem uygulamaz.* \n `.düzenlenen-kanal-koruma`")
.addField(` **Silinen Kanal Koruma**`,"*Silinen kanalları otomatik olarak tekrar açar.*\n*Silen yetkiliden tüm rolleri alır.* \n `.silinen-kanal-koruma`")
.addField(` **Kanal Log**`,"*Yukarıda belirtilen işlemlerin kayıtlarını belirtilen kanala gönderir.*\n `.kanal-log`")



if(!args[0]) return message.channel.send(emb)
message.channel.send(emb)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanal-koruma"],
  permLevel: 0
}

exports.help = {
  name: 'kanal-koruma'
};