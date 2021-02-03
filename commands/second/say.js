const { Command } = require("discord.js-commando")

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: "say",
            aliases: ["talk"],
            group: "second",
            memberName: "say",
            description: "Say Command",
            args: {
                key: "text",
                prompt: "Please enter arguments",
                type: "string",
            },
        })
    }

    run(message, { text }) {
        return message.say(text)
    }
}