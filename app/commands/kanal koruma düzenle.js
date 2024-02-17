const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args,bot) => {
let yetkili  =   db.fetch(`yetkili.${message.guild.id}`);

const invex1 = new Discord.MessageEmbed()
.setColor('BLUE')
  .setDescription(`Bu işlemi yapabilmek için yetkili role sahip olmalı veya sunucu sahibi olmalısınız!`)
    .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
      .setFooter(client.user.username,client.user.avatarURL())
      .setTimestamp()
if((message.author.id !== message.guild.owner.user.id) && !message.member.roles.cache.has(yetkili)) return message.channel.send(invex1);

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter(client.user.username,client.user.avatarURL())
.setTimestamp()
.setTitle(`***__Kanal Koruma Sistemi__***`)
.setDescription(`<a:unlem:758930479105441795> ***Düzenlenen Kanal Koruma Sistem Bilgilendirmesi***\n *Düzenlenen kanalları eski haline getirir.*\n`)
.addField(`<a:cark:758932136228159497> **Nasıl Açacağım?**`,"`.düzenlenen-kanal-koruma aç`\n")
.addField(`<a:cark:758932136228159497> **Nasıl Kapatacağım?**`,"`.düzenlenen-kanal-koruma kapat`")

if(!args[0]) return message.channel.send(emb)

const invex11 = new Discord.MessageEmbed()
.setColor('BLUE')
  .setDescription(`Düzenlenen Kanal Koruma sistemi başarıyla açıldı.`)
    .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()

const invex111 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Düzenlenen Kanal Koruma sistemi kapatıldı.`)
  .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()

const inve1 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Düzenlenen Kanal Koruma sistemi zaten kapalı durumda.`)
  .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()


const inve0 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Düzenlenen Kanal Koruma sistemi zaten açık durumda.`)
  .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()

if(args[0] === "aç"){
if(db.has(`duzkanal.${message.guild.id}`)) return message.channel.send(inve0);
message.channel.send(invex11) 
db.set(`duzkanal.${message.guild.id}`, "Açık")

}else if(args[0] === "kapat"){
if(!db.has(`duzkanal.${message.guild.id}`)) return message.channel.send(inve1);
db.delete(`duzkanal.${message.guild.id}`)
message.channel.send(invex111)

}else{
message.channel.send(emb)
}


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["düzenlenen-kanal-koruma"],
  permLevel: 0
}

exports.help = {
  name: 'düzenlenen-kanal-koruma'
};