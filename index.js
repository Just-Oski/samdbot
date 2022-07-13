const fs = require('fs');
const discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone', intents: [
    Intents.GUILDS,
    Intents.GUILD_MEMBERS,
    Intents.GUILD_BANS,
    Intents.GUILD_EMOJIS_AND_STICKERS,
    Intents.GUILD_INTEGRATIONS,
    Intents.GUILD_WEBHOOKS,
    Intents.GUILD_INVITES,
    Intents.GUILD_VOICE_STATES,
    Intents.GUILD_PRESENCES,
    Intents.GUILD_MESSAGES,
    Intents.GUILD_MESSAGE_REACTIONS,
    Intents.GUILD_MESSAGE_TYPING,
    Intents.DIRECT_MESSAGES,
    Intents.DIRECT_MESSAGE_REACTIONS,
    Intents.DIRECT_MESSAGE_TYPING,
    Intents.GUILD_SCHEDULED_EVENTS] });

client.config = require('./bot');
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

client.login(client.config.discord.token);