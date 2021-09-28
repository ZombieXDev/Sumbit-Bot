const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('All Copyrights Go To ZombieX')
});

app.listen(3000, () => {
  console.log('server started');
});
const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "Your Prefix"

client.on("ready", () =>{
console.log(`${client.user.username} is Online`)
client.user.setActivity(`${prefix}help (ZombieX Sumbit Bot)`)

})

const data = require("./q.json")
let ss = true
client.on("message", message =>{
if(message.content.startsWith(prefix + "system-sumbit on")){
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You Dont Have ADMINISTRATOR permission")
ss = true
message.channel.send("**✅ | Sumbit System is On**")
}if(message.content.startsWith(prefix + "system-sumbit off")){
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You Dont Have ADMINISTRATOR permission") 
ss = false
message.channel.send("**✅ | Sumbit System is Off**")
}
})


client.on("message", message =>{
if(message.content === prefix + "help"){
const embed = new Discord.MessageEmbed()
.setTitle("Commands:")
.setColor("BLUE")
.setThumbnail(message.author.avatarURL())
.addField(`${prefix}sumbit`, "To apply for a role", true)
.addField(`${prefix}system-sumbit (on/off)`, "To control the presentation system", true)
message.author.send(embed)
}
if(message.content === prefix + "sumbit"){
if(ss == true){
message.channel.send(data.one)//q1

var filter = m => m.author.id == message.author.id;
message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time'],
})
.then((collected) => {
 const q1 = collected.first().content;
 
 message.channel.send(data.two)//q2
 var filter = m => m.author.id == message.author.id;
message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time'],
})
.then((collected) => {
   const q2 = collected.first().content;
   message.channel.send(data.three)//q3
   var filter = m => m.author.id == message.author.id;
message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time'],
})
.then((collected) => {
 const q3 = collected.first().content; 
 message.channel.send(data.four)//q4
 var filter = m => m.author.id == message.author.id;
message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time'],
})
.then((collected) => {
 const q4 = collected.first().content;
 message.channel.send(data.five)//q5
 var filter = m => m.author.id == message.author.id;
message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time'],
})
.then((collected) => {
const q5 = collected.first().content;
message.channel.send(`Do you went Send Your Sumbit?\n **Type: (yes) Or (no)**`)
var filter = m => m.author.id == message.author.id;
message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time'],
})
.then((collected) => {
 if(collected.first().content === "yes"){
  message.channel.send("Done Send Your Sumbit")   
const embed = new Discord.MessageEmbed()
.setTitle("New Sumbit!")
.setThumbnail(message.guild.iconURL())
.setColor("BLUE")
.addField(`> ${data.one}`, q1, true)
.addField(`> ${data.two}`, q2, true)
.addField(`> ${data.three}`, q3, true)
.addField(`> ${data.four}`, q4, true)
.addField(`> ${data.five}`, q5, true)
.setTimestamp()
.setFooter(`from: ${collected.first().author.tag}`)
client.channels.cache.get(process.env.ch).send(embed)
 }
 if(collected.first().content === "no"){
 message.channel.send("Done Cancellation Your Sumbit")
 }
})
.catch(() => {
            message.channel.send("**❌ | Error Try Again**")
});
})
.catch(() => {
            message.channel.send("**❌ | Error Try Again**")
});  
})
.catch(() => {
            message.channel.send("**❌ | Error Try Again**")
});
})
.catch(() => {
            message.channel.send("**❌ | Error Try Again**")
});
})
.catch(() => {
            message.channel.send("**❌ | Error Try Again**")
});
})
.catch(() => {
            message.channel.send("**❌ | Error Try Again**")
});
}else {
    message.channel.send("Sumbit System is Off")
}
}
})


client.login(process.env.token).catch(() =>{
    console.log("Invalid Token")
})
