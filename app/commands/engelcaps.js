const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args,bot) => {
let yetkili  =   db.fetch(`yetkili.${message.guild.id}`);

const invex1 = new Discord.MessageEmbed()
.setColor('BLUE')
  .setDescription(`Bu işlemi yapabilmek için yetkili role sahip olmalı veya sunucu sahibi olmalısınız!`)
    .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
      .setFooter(client.user.username,client.user.avatarURL())
      .setTimestamp()

if(message.author.id !== ayarlar.sahip) return;

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter(client.user.username,client.user.avatarURL())
.setTimestamp()
.setTitle(`***__Caps Lock Engel Sistemi__***`)
.setDescription(`<a:unlem:758930479105441795> ***Caps Lock Engel Sistem Bilgilendirmesi***\n *Mesajın %60'ından fazlası büyük harfse mesajı siler.*\n`)
.addField(`<a:cark:758932136228159497> **Nasıl Aktif Edeceğim?**`,"`.caps-engel aç`\n")
.addField(`<a:cark:758932136228159497> **Nasıl İzin Kaldıracağım?**`,"`.caps-engel kapat`\n")

const invex1111 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Reklam engel sistemi bu kanalda zaten açık.`)
  .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()

const invex222 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Reklam engel sistemi bu kanalda zaten kapalı.`)
  .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()

if(!args[0]) return message.channel.send(emb)

const invex111 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Caps Engel sistemi bu kanalda aktif edildi.`)
  .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()

const invex19 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Caps Engel sistemi bu kanalda kapatıldı.`)
  .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()

if(args[0] === "aç"){
if(db.has(`capsengel.${message.channel.id}`)) return message.channel.send(invex1111);
message.channel.send(invex111) 
db.set(`capsengel.${message.channel.id}`, "Açık")

}else if(args[0] === "kapat"){
if(!db.has(`capsengel.${message.channel.id}`)) return message.channel.send(invex222);
db.delete(`capsengel.${message.channel.id}`)
message.channel.send(invex19)

}else{
message.channel.send(emb)
}

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["capsengel"],
    permLevel: 0
  }
  
  exports.help = {
    name: 'caps-engel'
  };