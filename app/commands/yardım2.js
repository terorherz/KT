const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor("Karslı Guard",client.user.avatarURL())
.setDescription(`Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
.setTimestamp()
.addField('> .istatistik ',' Botun İstatiğini Atar')
.addField('> .kanal-koruma ',' Kanal koruması sağlar, ayrıntılı bilgi için komudu kullanın.')
.addField('> .rol-koruma ',' Rol koruması sağlar, ayrıntılı bilgi için komudu kullanın.')
.addField('> .emoji-koruma ',' Emoji koruması sağlar ayrıntılı bilgi için komudu kullanın.')
.addField('> .bot-koruma ',' Botlara karşı koruma sağlar ayrıntılı bilgi için komudu kullanın.')
.addField('> .mesaj-log ',' Silinen ve düzenlenen mesajları kanala gönderir. Ayrıntılı bilgi için komudu kullanın.')
.addField('> .yetkili ',' Role bota komut verme yetkisini verir.Ancak yine de yetkililer korumalardan etkilenir.  ')
.addField('> .dokunulmaz ',' Bot ayarlanmış role sahip olanları görmezden gelir. Tehlikeli bir izindir.')
.setFooter(`Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.setTimestamp()
.setFooter(" made by hherz | Support Server: https://discord.gg/karslii")
.setImage("")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help', 'y'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};