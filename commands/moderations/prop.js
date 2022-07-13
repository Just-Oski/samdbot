const { MessageEmbed } = require('discord.js');
const dotenv = require("dotenv").config("./.env")

module.exports = {
	name: 'szef',
	async execute(client, message, args){
        if(!message.member.roles.cache.some(r => r.name === "👑│ MTU Commander")) return message.reply('Nie możesz tego użyć!')
		message.delete();
		const awanse1 = new MessageEmbed()
		.addField('[46] Laira Divers', 'z Doctor na Senior Doctor')
		const awanse2 = new MessageEmbed()
		.addField('[47] John Czesiak', 'z Doctor na Senior Doctor')
		const awanse3= new MessageEmbed()
		.addField('[48] Kamil Nowak', 'z Doctor na Senior Doctor')
		const awanse4= new MessageEmbed()
		.addField('[66] Adrian Smith', 'z Paramedic na Senior Paramedic')
		const awanse5= new MessageEmbed()
		.addField('[67] Liam White', 'z Paramedic na Senior Paramedic')
		const awanse6= new MessageEmbed()
		.addField('[78] Mario Malboro ', 'z Nurse na Paramedic')
		const awanse7= new MessageEmbed()
		.addField('[79] Will Morris', 'z Nurse na Paramedic')
		
		const degrad1=new MessageEmbed()
		.addField('[26] Maks Komoda', 'z Medical Specialist na Senior Doctora | Brak Aktywności')
		const degrad2=new MessageEmbed()
		.addField('[51] Mateusz Ucicha', 'z Doctora na Senior Paramedica | Brak Aktywności')

		const lota1=new MessageEmbed()
		.addField('[76] Henriko Bebiko', 'Brak Aktywności')
		const lota2=new MessageEmbed()
		.addField('[77] Michal Szypki', 'Brak aktywności')
		
		message.channel.send(awanse1).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
		message.channel.send(awanse2).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
		message.channel.send(awanse3).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
		message.channel.send(awanse4).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
		message.channel.send(awanse5).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
		message.channel.send(awanse6).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
		message.channel.send(awanse7).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
		message.channel.send(degrad1).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
		message.channel.send(degrad2).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
		message.channel.send(lota1).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
		message.channel.send(lota2).then(function (message) {
			message.react("👍")
			message.react("👎")
		  });
	},
};