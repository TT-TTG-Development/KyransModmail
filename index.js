const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("Started!")
})

app.listen(3000, () => {
 console.log("Modmail Loading...")
})
const Discord = require('discord.js');
const client = new Discord.Client();
const { token,thumb,modmailServerId,ticketCategoryID,modmailLogChannelId,mainServerId } = require('./config.json');

var prefix="!!";
client.once('ready', () => {
     console.log('Ready');
}); 

let rList = {}
var userID;
 var reason;
 var ticketName;
client.on('message', message => { 
    if (message.author.bot || !(message.channel.parentID === ticketCategoryID || message.channel.type === 'dm')) return;
const serverName = client.guilds.cache.get(mainServerId).name;

const argCmd = message.content.slice(prefix.length).trim().split(' ');
const cmd = argCmd.shift().toLowerCase();
const args = message.content.slice(prefix.length+cmd.length).trim().split('/ +/')
try{
    userID=message.channel.name.split('-').pop();
 }
catch(err){userID = message.author.id; }
if (message.channel.type==='dm') {
    reason = rList[message.author.id];
    try{

    var ticketNamerep1 = message.author.tag.replace(/#/g, "-");
    ticketName = ticketNamerep1.replace(/ /g, "-").toLowerCase();

const logMailCEmbed = new Discord.MessageEmbed();
logMailCEmbed.setColor('#257af9')
logMailCEmbed.setAuthor(`${serverName} Support`,thumb)
logMailCEmbed.setTimestamp()
logMailCEmbed.setTitle(`New Modmail Thread Created!`)
logMailCEmbed.setThumbnail(thumb)
logMailCEmbed.setDescription(`Ticket created by \`${message.author.tag}\`.`)
if (message.attachments.size>0){logMailCEmbed.setImage(message.attachments.first().url)}
logMailCEmbed.setFooter(`TT-TTG World Modmail Thread`)

    if ((!client.guilds.cache.get(modmailServerId).channels.cache.some(channel => channel.name.split('-').pop() === userID))) {
rList[message.author.id]=message.content;


    var channel = client.guilds.cache.get(modmailServerId).channels.create(`${ticketName}-${userID}`, {parent : ticketCategoryID});
channel.then(c => c.setTopic('Modmail Thread | TT-TTG World')).then(c => c.send(logMailCEmbed));
reason = rList[message.author.id];
  const lc = client.channels.fetch(modmailLogChannelId).then(l => {l.send(logMailCEmbed)});
  
    const createMailEmbed = new Discord.MessageEmbed();
    createMailEmbed.setColor('#257af9')
    createMailEmbed.setTitle(`Hello! Welcome to your Modmail menu! Respond with the number that suits your purpose! Example: Typing \`1\` in DM\'s would choose the category \`Request a role\``,thumb)
    createMailEmbed.setTimestamp()
    createMailEmbed.setDescription("This is the official Modmail menu for TT-TTG World! Please make sure that you are serious with your questions, as we do not have time for trolls. Here are some of the categories that we have for our modmail:")
    createMailEmbed.addFields(
       { name: '\`1: Request a role\`', value: 'Request a role in the server. Make sure you provide a reason on you deserve it. Some examples of roles that you can earn are: Art Validator and Youtuber. Please make sure you meet the requirements for these roles before asking. If you are not sure what they are, check our FAQ or Role-Info in the server.'},
       { name: '\`2: Report a staff member\`', value: 'Report a staff member. Make sure that you tell us who the member of staff was and what they did wrong. If you can, provide a punishment ID as well from the punishment so that we can track it easier. If you cannot provide the moderators name, just provide the punishment ID from the punishment as mentioned before.'},
       { name: '\`3: Make a suggestion\`', value: 'This is for making suggestion about the server, it could be a rule you\'d like changed or explained or a cool feature you\'d like to see, just make sure it is something that is reasonable and serious. **(We don\'t have alot of time for jokes)**'},
       { name: '\`4: Appeal a punishment\`', value: 'This is for appealing any punishment you were given. You can appeal punishments if you did not really break the rule, feel it was unfair or bias. Make sure that you specify the punishment ID that came with the warning so that we can track it. You cannot appeal Automod punishments as they are always accurate and only last for 24 hours.'},
       { name: '\`5: Report a user\`', value: 'Report a rule breaker. If a moderator has not seen someone breaking the rules, you can use this section of the modmail by stating what rule the user broke, the user ID or user mention, and the message link to the message that broke the rule.'},
       { name: '\`6: Cancel\`', value: 'Typing \`cancel\` will cancel this prompt and delete the modmail thread'}
    )
    createMailEmbed.setFooter(`TT-TTG World Modmail Thread`)
message.author.send(createMailEmbed);
} setTimeout(() => {
    if(message.content === null) 
    reason=rList[userID];
    var user = message.author
    user.send(`Your Modmail Thread has been Closed due to inactivity.`) 
    channel.then(c => c.delete());
}, 200000);

}  
catch(err){
message.author.send('Too many tickets are open at the moment; please wait a bit and then try again. If you were not creating a ticket, please DM a high ranking staff member with a screenshot of this message.')

console.log(err);
return;
    }
    reason=rList[userID];
    const sc = client.guilds.cache.get(modmailServerId).channels.cache.find(channel => channel.name.split("-").pop() === userID);
    if(message.content === 'cancel') {
        var user = message.author
        user.send('Cancelled.')
        message.channel.delete();
    }

    if(message.content === '1') {
        const catagory1Embed = new Discord.MessageEmbed()
        .setColor('#257af9')
        .setAuthor(message.author.tag,message.author.avatarURL())
        .setTimestamp()
        .setTitle("A modmail entry was made for the category: \`Request a role\`")
        if (message.attachments.size>0){inMailEmbed.setImage(message.attachments.first().url)}
        message.author.send('You have selected the category \`Request a role\`, please send a detailed message that includes all the information required in the modmail menu.')
        try{sc.send(catagory1Embed);}
        catch(err){console.log(console.error())}
    }
        
    else if(message.content === '2') {
        const catagory2Embed = new Discord.MessageEmbed()
        .setColor('#257af9')
        .setAuthor(message.author.tag,message.author.avatarURL())
        .setTimestamp()
        .setTitle("A modmail entry was made for the category: \`Report a member of staff\`")
        if (message.attachments.size>0){inMailEmbed.setImage(message.attachments.first().url)}
        message.author.send('You have selected the category \`Report a staff member\`, please send a detailed message that includes all the information required in the modmail menu.')
        try{sc.send(catagory2Embed);}
        catch(err){console.log(console.error())}
    }
    else if(message.content === '3') {
        const catagory3Embed = new Discord.MessageEmbed()
        .setColor('#257af9')
        .setAuthor(message.author.tag,message.author.avatarURL())
        .setTimestamp()
        .setTitle("A modmail entry was made for the category: \`Make a suggestion\`")
        if (message.attachments.size>0){inMailEmbed.setImage(message.attachments.first().url)}
        message.author.send('You have selected the category \`Make a suggestion\`, please send a detailed message that includes all the information required in the modmail menu.')
        try{sc.send(catagory3Embed);}
        catch(err){console.log(console.error())}
    }
    else if(message.content === '4') {
        const catagory4Embed = new Discord.MessageEmbed()
        .setColor('#257af9')
        .setAuthor(message.author.tag,message.author.avatarURL())
        .setTimestamp()
        .setTitle("A modmail entry was made for the category: \`Appeal a punishment\`")
        if (message.attachments.size>0){inMailEmbed.setImage(message.attachments.first().url)}
        message.author.send('You have selected the category \`Appeal a punishment\`, please send a detailed message that includes all the information required in the modmail menu.')
        try{sc.send(catagory4Embed);}
        catch(err){console.log(console.error())}
    }
    else if(message.content === '5') {
        const catagory5Embed = new Discord.MessageEmbed()
        .setColor('#257af9')
        .setAuthor(message.author.tag,message.author.avatarURL())
        .setTimestamp()
        .setTitle("A modmail entry was made for the category: \`Report a user\`")
        if (message.attachments.size>0){inMailEmbed.setImage(message.attachments.first().url)}
        message.author.send('You have selected the category \`Report a user\`, please send a detailed message that includes all the information required in the modmail menu.')
        try{sc.send(catagory5Embed);}
        catch(err){console.log(console.error())}
    }
    else{
    const inMailEmbed = new Discord.MessageEmbed();
    inMailEmbed.setColor('#257af9')
    inMailEmbed.setAuthor(message.author.tag,message.author.avatarURL())
    inMailEmbed.setTimestamp()
    inMailEmbed.setTitle("Incoming message!")
    inMailEmbed.setDescription(`**Message content:** \`${message.content}\``)
    if (message.attachments.size>0){inMailEmbed.setImage(message.attachments.first().url)}
    
    inMailEmbed.setFooter(`TT-TTG World Modmail Thread`)
    const ls = client.channels.fetch(modmailLogChannelId).then(l => {l.send(inMailEmbed)});
   
  
   try{sc.send(inMailEmbed);}
   catch(err){console.log(console.error())}
    }
}

if (message.channel.parentID === ticketCategoryID) {
    if (cmd === "reply" || cmd === "respond" || cmd==='r') {
var UID=message.channel.name.split("-").pop();
var user = client.users.cache.get(`${UID}`);
reason=rList[userID];
const outMailEmbed = new Discord.MessageEmbed();
    outMailEmbed.setColor('#257af9')
    outMailEmbed.setAuthor(message.author.tag,message.author.avatarURL())
    outMailEmbed.setTimestamp()
    outMailEmbed.setTitle("You have recieved a message from the TT-TTG World Staff!")
    outMailEmbed.setDescription(args)
    if (message.attachments.size>0){outMailEmbed.setImage(message.attachments.first().url)}
    outMailEmbed.setFooter(`Ticket: ${(user.tag.replace(/#/g,'-')).replace(/ /g,'-')} | TT-TTG World Modmail Thread`)
    const lso = client.channels.fetch(modmailLogChannelId).then(l => {l.send(outMailEmbed)});

try{user.send(outMailEmbed);}
catch(err){console.log("error")}
const sentEmbedK = new Discord.MessageEmbed()
.setTitle('📧 | Your message was sent successfully to the user!')
.setColor('#f70505');
message.channel.send(sentEmbedK)
    }
if (cmd==='areply' || cmd === 'arespond' || cmd === 'ar') {
    var UID=message.channel.name.split("-").pop();
    var user = client.users.cache.get(`${UID}`);
    reason=rList[userID];
    const outMailEmbed = new Discord.MessageEmbed();
        outMailEmbed.setColor('#257af9')
        outMailEmbed.setAuthor('[ANONYMOUS REPLY FROM SUPPORT]', thumb)
        outMailEmbed.setTimestamp()
        outMailEmbed.setTitle("Reply from Support")
        outMailEmbed.setThumbnail(thumb)
        outMailEmbed.setDescription(args)
      if (message.attachments.size>0){outMailEmbed.setImage(message.attachments.first().url)}
        outMailEmbed.setFooter(`Ticket:${(user.tag.replace(/#/g,'-')).replace(/ /g,'-')} | TT-TTG World Modmail Thread`)
        const outMailEmbedL = new Discord.MessageEmbed();
        outMailEmbedL.setColor('#257af9')
        outMailEmbedL.setAuthor(`[ANONYMOUS REPLY FROM SUPPORT] ${message.author.tag}`,message.author.avatarURL())
        outMailEmbedL.setTimestamp()
        outMailEmbedL.setTitle("Reply from Support")
        outMailEmbedL.setThumbnail(thumb)
        outMailEmbedL.setDescription(args)
      if (message.attachments.size>0){outMailEmbedL.setImage(message.attachments.first().url)}
        outMailEmbedL.setFooter(`Ticket: ${(user.tag.replace(/#/g,'-')).replace(/ /g,'-')} | TT-TTG World Modmail Thread`)
        const lsao = client.channels.fetch(modmailLogChannelId).then(l => {l.send(outMailEmbedL)});

    try{user.send(outMailEmbed);}
    catch(err){console.log("error")}
    const sentEmbedB = new Discord.MessageEmbed()
    .setTitle('📧 | Your message was sent successfully to the user!')
    .setColor('#f70505');
    message.channel.send(sentEmbedB)

}
if (cmd==='close' || cmd==='c') {
    reason=rList[userID];
    var UID=message.channel.name.split("-").pop();
    var user = client.users.cache.get(`${UID}`);
    const closeMailEmbed = new Discord.MessageEmbed();
    closeMailEmbed.setColor('#f70505')
    closeMailEmbed.setTitle(`🔒 Modmail Thread / Ticket Closed`)
    closeMailEmbed.setTimestamp()
    closeMailEmbed.setDescription("This ticket has been closed by the moderation team of TT-TTG World, we hope you had a pleasent experince talking to our staff! Have a good day!")
  
    delete rList[UID];
     user.send(closeMailEmbed);
     message.channel.delete();
   
    const lcs = client.channels.fetch(modmailLogChannelId).then(l => {l.send(closeMailEmbed)});

}
}
if (cmd==='help' || cmd==='h') {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#257af9')
    .setTitle('Modmail Commands')
    .addFields(
        { name: '\`PREFIX IS \`!!\`', value: '`reply` : \`Reply to a ticket\`\n\n\`areply\` : \`Reply to a ticket anonymously\`\n\n\`close\` : \`Close the ticket that you are currently responding to\`' })
    message.channel.send(helpEmbed)
}

;});

client.login(token);
