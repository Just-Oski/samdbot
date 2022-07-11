const { MessageEmbed } = require('discord.js');
const dotenv = require("dotenv").config("./.env")

module.exports = {
	name: 'pytanie',
	async execute(client, message, args){
        if(!message.member.roles.cache.some(r => r.name === "👨‍⚕️ | Weryfikator")) return message.reply('Nie możesz tego użyć!')
		message.delete();
			const zeroPad = (num, places) => String(num).padStart(places, '0')
		try {
			var currentdate = new Date(); 
			var datetime = (zeroPad(currentdate.getHours()+2, 2)) + ":" 
			+ zeroPad(currentdate.getMinutes(), 2) + " " 
			+ zeroPad(currentdate.getDate(), 2) + "."
			+ zeroPad((currentdate.getMonth()+1), 2) + "." 
			+ currentdate.getFullYear()

			const embed = new MessageEmbed()
				.setTitle(`Weryfikatorzy San Andreas Medical Department informują o otwarciu okienka!`)
				.setDescription(`Przygotujcie sobie:\n> • Wiedze z kompedium\n• Wiedze z kodów radiowych\n• Możliwość odrzucenia`)
				.setColor('6cf542')
				
			return client.channels.cache.get("994386789865369742").send("<@&989951896175407195>"), client.channels.cache.get("994386789865369742").send(embed);
		} catch (e) {
			const logembed = new MessageEmbed()
			.setTitle(`Logi`)
			.setColor('34ebd8')
			.setDescription(e)
			.setFooter(datetime);
			return message.channel.send(`Najprawdopodobniej, bot zajebał fikołka\nLub osoba wyszła z serwera.`).then(console.log(e)),
			client.channels.cache.get("991053438404149280").send(logembed);
		}
	},
};