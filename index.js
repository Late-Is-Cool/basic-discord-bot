const config = require("./config.json")

const { CommandoClient } = require("discord.js-commando")
const path = require("path")

const client = new CommandoClient({
    commandPrefix: config.prefix,
    owner: "id", // can be an array like ["", ""]
    invite: "discord invite" // optional, sends the invite whenever theres a problem
})

client.on("ready", () => {
    client.registery
    .registerDefaultTypes()
    .registerGroups([
        ["first", "first group"],
        ["second", "second group"],
        // add as many groups as you like
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    /**
     * registerDefaultCommands({
     *      help: false,
     * })
     * disable commands
     */
    .registerCommandsIn(path.join(__dirname, "commands"))
})

client.login(config.token)