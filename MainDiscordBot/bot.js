const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true})

bot.on('ready', async() =>{
	console.log(`This Bot is Seccesfuly Online ${bot.user.username}`);

	try {
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);		
	}catch{
		console.log(e.stack);
	}
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if(!command.startsWith(prefix)) return;

	if(command === `${prefix}h`) {
	
   {
                if(message.member.voiceChannelID)
            { 
                if(!message.guild.voiceChannelID)
                { 
                    message.member.setVoiceChannel()
                    .then(connection =>{
                        message.reply(`המשתמש הזה
<@&650054467848503297> צריך את העזרה שלכם\`\`\``+ message.member.voiceChannel.name+`המשתמש נימצא בחדר דיבור\`\`\`:mute: :no_entry_sign:`);
                    })
                }
            }
            else
        { 
            message.reply(`המשתמש הזה
<@&650054467848503297> צריך את העזרה שלכם\`\`\`המשתמש לא נמצא באף חדר דיבור \`\`\` :mute: :no_entry_sign:`);

        }
    }   


	}
});

bot.login(botSettings.token);