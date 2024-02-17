const Discord = require('discord.js');

exports.run = async (client, message, args,bot) => {

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter(client.user.username,client.user.avatarURL())
.setTimestamp()
.setTitle(`***__${client.user.username} Emoji Koruma Sistemi__***`)
.setDescription(`<a:unlem:758930479105441795> ***Detaylı Emoji Koruma Sistem Bilgilendirmesi***`)
.addField(` **Eklenen Emoji Koruma**`,"*Eklenen emojileri anında kapatır.*\n*Ekleyen yetkiliye işlem uygulamaz.* \n\n `.eklenen-emoji-koruma`")
.addField(` **Emoji İsim Koruma**`,"*Değiştirilen emojiyi eski haline getirir.*\n*Düzenleyen yetkiliye işlem uygulamaz.* \n\n `.emoji-isim-koruma`")
.addField(` **Silinen Emoji Koruma**`,"*Silinen emojileri otomatik olarak tekrar ekler.*\n*Silenin tüm rollerini alır.* \n\n `.silinen-emoji-koruma`")
.addField(` **Emoji Log**`,"*Yukarıda belirtilen işlemlerin kayıtlarını belirtilen kanala gönderir.*\n\n `.emoji-log`")



if(!args[0]) return message.channel.send(emb)
message.channel.send(emb)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["emoji-koruma"],
  permLevel: 0
}

exports.help = {
  name: 'emoji-koruma'
};