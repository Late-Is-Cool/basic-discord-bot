```js
const { Command } = require("discord.js-commando")

module.exports = class ExampleCommand extends Command {
    constructor(client) {
        super(client, {
            name: "example",
            aliases: ["ex", "first"], // optional, same command but with a different name
            group: "first",
            memberName: "example",
            description: "Example Command",
            throttling: {
                usages: 2,
                duration: 10,
            }, // optional, this is basically a cooldown system
            guildOnly: true, // optional, can be used only in the servers instead of DMs
            clientPermissions: [""], // optional, checks if the bot has the right permission to use this command 
	        userPermissions: [""], // optional, checks if the user has the right permission to use this command
            ownerOnly: true // optional, the command can only be used by the bot owner
        })
    }

    run(message) {
        message.say("Test") // say is a built-in function by commando
    }
}
```
