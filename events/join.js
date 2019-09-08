const Discord = require("discord.js")
const colours = require("../colours.json");

module.exports = bot => {
    const channel = member.guild.channels.find("name", "report");
    if (!channel) console.log("Ten kanał nie istnieje");

    var joinMessage = new discord.RichEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Ooo ${member.user.username}, **Witaj na serwerze**`)
        .setColor(colours.purple)
        .setTimestamp()
        .setFooter(`WolziBot | Footer`, bot.user.displayAvatarURL);
    channel.send(joinMessage);    
}