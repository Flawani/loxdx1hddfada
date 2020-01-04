const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    name: "buy",
    category: "Work",
    description: "kup range",
    usage: "<id | wzmianka>",
    run: async (client, message, args) => {

        let author = db.fetch(`Łybcie_${message.author.id}`)

        if (args[0] == 'Piracka-Łyba') {
            if (!message.guild.roles.find("name", 'Piracka Łyba')) return message.channel.send('Nie mogłem znaleźć roli o nazwie `Piracka Łyba`, sprawdź u właścicieli.')
            if (author < 10000) return message.channel.send("Potrzebujesz przynajmniej 10000$, aby kupić rolę Piracka Łyba")

            message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "Piracka Łyba"))

            db.subtract(`Łybcie_${message.author.id}`, 10000)
            message.channel.send(message.author.tag + ' Udało ci się kupić rolę ** Piracka Łyba ** za `10000$`')
        } else if(args[0] == 'VR-ŁYBA') {
            if (!message.guild.roles.find("name", 'VR Łyba')) return message.channel.send('Nie mogłem znaleźć roli o nazwie `VR Łyba`, sprawdź u właścicieli.')
            if (author < 15000) return message.channel.send("Potrzebujesz przynajmniej 15000$, aby kupić rolę VR Łyba")
            
            message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "VR Łyba"))

            db.subtract(`Łybcie_${message.author.id}`, 15000)
            message.channel.send(message.author.tag + ' Udało ci się kupić rolę ** VR Łyba ** za `15000$`')
        } else if(args[0] == 'Król-Łyba') {
            if (!message.guild.roles.find("name", 'Król Łyba')) return message.channel.send('Nie mogłem znaleźć roli o nazwie `Król Łyba`, sprawdź u właścicieli.')
            if (author < 17500) return message.channel.send("Potrzebujesz przynajmniej 17500$, aby kupić rolę Król Łyba")
            
            message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "Król Łyba"))

            db.subtract(`Łybcie_${message.author.id}`, 17500)
            message.channel.send(message.author.tag + ' Udało ci się kupić rolę ** Król Łyba ** za `17500$`')
        } else if(args[0] == 'BIG-ŁYBA') {
            if (!message.guild.roles.find("name", 'Big Łyba')) return message.channel.send('Nie mogłem znaleźć roli o nazwie `BIG ŁYBA`, sprawdź u właścicieli.')
            if (author < 25000) return message.channel.send("Potrzebujesz przynajmniej 25000$, aby kupić rolę Król Łyba")
            
            message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "Big Łyba"))

            db.subtract(`Łybcie_${message.author.id}`, 25000)
            message.channel.send(message.author.tag + ' Udało ci się kupić rolę ** Big Łyba ** za `25000$`')
        } else if(args[0] == 'Łyba-Boża') {
            if (!message.guild.roles.find("name", 'ŁYBA BOŻA')) return message.channel.send('Nie mogłem znaleźć roli o nazwie `Łyba Boża`, sprawdź u właścicieli.')
            if (author < 30000) return message.channel.send("Potrzebujesz przynajmniej 30000$, aby kupić rolę Łyba Boża")
            
            message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "ŁYBA BOŻA"))

            db.subtract(`Łybcie_${message.author.id}`, 30000)
            message.channel.send(message.author.tag + ' Udało ci się kupić rolę ** Łyba Boża ** za `30000$`')
        } else if(args[0] == 'Łyba-Boża-lvl-2') {
            if (!message.guild.roles.find("name", 'ŁYBA BOŻA lvl 2')) return message.channel.send('Nie mogłem znaleźć roli o nazwie `Łyba Boża lvl 2`, sprawdź u właścicieli.')
            if (author < 35000) return message.channel.send("Potrzebujesz przynajmniej 35000$, aby kupić rolę Łyba Boża lvl 2")
            
            message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "ŁYBA BOŻA lvl 2"))

            db.subtract(`Łybcie_${message.author.id}`, 35000)
            message.channel.send(message.author.tag + ' Udało ci się kupić rolę ** Łyba Boża lvl 2 ** za `35000$`')
        } else if(args[0] == 'Łyba-Boża-lvl-3') {
            if (!message.guild.roles.find("name", 'ŁYBA BOŻA lvl 3')) return message.channel.send('Nie mogłem znaleźć roli o nazwie `Łyba Boża lvl 3`, sprawdź u właścicieli.')
            if (author < 40000) return message.channel.send("Potrzebujesz przynajmniej 40000$, aby kupić rolę Łyba Boża lvl 3")
            
            message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "ŁYBA BOŻA lvl 3"))

            db.subtract(`Łybcie_${message.author.id}`, 40000)
            message.channel.send(message.author.tag + ' Udało ci się kupić rolę ** Łyba Boża lvl 3 ** za `40000$`')
        }
    }
}