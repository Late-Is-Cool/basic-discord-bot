# basic-discord-bot

basic discord bot

# some warnings

Install Github Desktop (or just copy the code)

If you don't have a code editor then I recommend Visual Studio Code (https://code.visualstudio.com/)

Install NodeJS before you do any of this

Also learn some Javascript (https://discordjs.guide/#before-you-begin)

𝗣𝗟𝗘𝗔𝗦𝗘 𝗡𝗢𝗧𝗘 𝗧𝗛𝗔𝗧 𝗧𝗛𝗜𝗦 𝗜𝗦 𝘃𝟭𝟮 𝗔𝗡𝗗 𝗡𝗢𝗧 𝘃𝟭𝟭 𝗖𝗔𝗨𝗦𝗘 𝗜𝗧 𝗜𝗦 𝗢𝗨𝗧𝗗𝗔𝗧𝗘𝗗

# config

Go to the config.json file

```json
{
    "token": "TOKEN_HERE",
    "mongo_url": "(OPTIONAL)",
    "prefix": "PREFIX",
}
```

# npm things

Next you install discord.js (npm i discord.js, guide: https://discordjs.guide/)

npm i discordjs/Commando (command handler, install git in order to use this, guide: https://discordjs.guide/commando/)

# mongoDB

npm i mongoose (if you are using mongoDB)

MongoDB tutorial: https://youtu.be/w2PGpAtmZwE

# other

Discord permissions are:

```
CREATE_INSTANT_INVITE
KICK_MEMBERS
BAN_MEMBERS
ADMINISTRATOR
MANAGE_CHANNELS
MANAGE_GUILD
ADD_REACTIONS
VIEW_AUDIT_LOG
PRIORITY_SPEAKER
STREAM
VIEW_CHANNEL
SEND_MESSAGES
SEND_TTS_MESSAGES
MANAGE_MESSAGES
EMBED_LINKS
ATTACH_FILES
READ_MESSAGE_HISTORY
MENTION_EVERYONE
USE_EXTERNAL_EMOJIS
VIEW_GUILD_INSIGHTS
CONNECT
SPEAK
MUTE_MEMBERS
DEAFEN_MEMBERS
MOVE_MEMBERS
USE_VAD
CHANGE_NICKNAME
MANAGE_NICKNAMES
MANAGE_ROLES
MANAGE_WEBHOOKS
MANAGE_EMOJIS
```