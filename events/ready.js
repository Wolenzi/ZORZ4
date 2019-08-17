const Discord = require("discord.js")


module.exports = bot => {
    console.log(`${bot.user.username} jest online`)

    let statues = [
        `${bot.guilds.size}!`,
        "!siema",
        `Ponad ${bot.users.size} użytkowników!`
    ]

    setInterval(function() {
        let status = statues[Math.floor(Math.random() * statues.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 5000)
}
