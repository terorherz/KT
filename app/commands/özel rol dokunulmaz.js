const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
  
  let role = message.mentions.roles.first() || message.guild.channels.cache.find(r => r.id == args[0])
  let yetkili = db.fetch(`yetkili.${message.guild.id}`)
    const logz = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setThumbnail(message.guild.iconURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setDescription('**Dokunulmaz rolünü yalnızca sunucu sahibi veya yetkili rolüne sahip olanlar ayarlayabilir!**')
    .setFooter(client.user.username,client.user.avatarURL())

      const logz1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setThumbnail(message.guild.iconURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setDescription('**Dokunulmaz olarak ayarlamak istediğiniz rolü etiketlemelisiniz.**')
    .setFooter(client.user.username,client.user.avatarURL())

      const logz2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setThumbnail(message.guild.iconURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setDescription(`**Dokunulmaz rol başarıyla ${role} olarak ayarlandı.**`)
    .setFooter(client.user.username,client.user.avatarURL())

   if ((message.member.id !== message.guild.owner.id) && !message.member.roles.cache.has(yetkili)) return message.reply(logz);    
  
    if (!role) return message.reply(logz1)
    message.channel.send(logz2)
    db.set(`dokunulmaz.${message.guild.id}`,role.id)
    
  
};

exports.help = {
  name: "dokunulmaz",
  guildOnly: true,
  enabled: true
}; 