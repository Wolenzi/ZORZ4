const Discord = require("discord.js")


module.exports = bot => {
    console.log(`${bot.user.username} jest online`)
    //bot.user.setActivity("TERRARIUM", {type: "STREAMING", url:"https://www.twitch.tv/wolzi_"});

    let statues = [
        `Jestem na ${bot.guilds.size} serwerach!`,
        "Grubego",
        "!siema",
        `Ponad ${bot.users.size} użytkowników!`
    ]

    setInterval(function() {
        let status = statues[Math.floor(Math.random() * statues.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 5000)
}
