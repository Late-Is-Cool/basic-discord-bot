const { Command } = require("discord.js-commando")

module.exports = class ExampleCommand extends Command {
    constructor(client) {
        super(client, {
            name: "example",
            aliases: ["ex", "first"],
            group: "first",
            memberName: "example",
            description: "Example Command",
        })
    }

    run(message) {
        message.say("Test")
    }
}