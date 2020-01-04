const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    name: "balance",
    category: "Work",
    description: "Sprawdź budrzet",
    usage: "<id | wzmianka>",
    run: async (client, message, args) => {

        let user = message.mentions.members.first() || message.author;

        let money = await db.fetch(`Łybcie_${user.id}`)
        if (money === null) money = 0;

        message.channel.send(`${user}, Łybcie w portfelu wynoszą: ${money}`)

    }
}