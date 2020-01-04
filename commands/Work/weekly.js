const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

module.exports = {
    name: "weekly",
    category: "Work",
    description: "Tygodniowa nagroda",
    usage: "<id | wzmianka>",
    run: async (client, message, args) => {

        let timeout = 604800000
        let amount = 1000

        let weekly = await db.fetch(`weekly_${message.author.id}`);

        if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
            let time = ms(timeout - (Date.now() - weekly));

            message.channel.send(`Już odebrałeś swoją tygodniową nagrodę, możesz wrócić i ją odebrać za **${time.days}d ${time.hours}g ${time.minutes}m ${time.seconds}s**`)
        } else {
            let embed = new Discord.RichEmbed()
            .setAuthor(`Tygodniowa`, message.author.displayAvatarURL)
            .setColor("GREEN")
            .setDescription(`**Tygodniowa Nagroda**`)
            .addField(`Zebrane`, amount)

            message.channel.send(embed)
            db.add(`Łybcie_${message.author.id}`, amount)
            db.set(`weekly_${message.author.id}`, Date.now())
        }

    }
}