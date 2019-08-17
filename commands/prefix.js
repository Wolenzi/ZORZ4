const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const fs = require("fs");

module.exports.run = async (bot, message, args, prefix) => {

    if(!message.member.hasPermission("MANAGE_DERVER")) return message.reply("Nie nie nie.");
    if(!args[0] || args[0 == "help"]) return message.reply(`Użycie: ${prefix}prefix <Żądany prefix tutaj>`);

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let pEmbed = new Discord.RichEmbed()
    .setColor(colours.green)
    .setTitle("✅Prefix Ustawiony!")
    .setDescription(`Ustawiono na ${args[0]}`);

    message.channel.send(pEmbed);
}

module.exports.config = {
    name: "prefix",
    aliases: ["si", "pre"]
}