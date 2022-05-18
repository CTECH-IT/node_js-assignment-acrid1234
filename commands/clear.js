module.exports = {
    name: 'clear',
    description: "Cleans the aftermath of a party (or any messages in general)",
    async execute(message, args) {
        if(!args[0]) return message.reply('How many messages do you wish to clear?');
        if(isNaN(args[0])) return message.reply('please enter a real number');

        if(args[0] > 50) return message.reply("You can't delete more than 50 msgs");
        if(args[0] < 1) return message.reply("You must delete at least one message");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        });
    }
}