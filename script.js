const discord = require('discord.js');
const bot = new discord.Client();

bot.on('ready', () => {
    console.log("Bot online" + bot.user.tag);
});

bot.login('ODgyMjYwMDEwNDM5MTU1NzIy.YS4yqg.WBOAU8Dike6AVnR0v5IOlKpXPLM');