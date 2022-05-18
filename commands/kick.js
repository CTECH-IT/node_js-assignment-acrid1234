module.exports = {
    name: 'kick',
    description: "This command kicks a party pooper!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('The party pooper was kicked! Good riddance!');
        } else{
            message.channel.send('You are not powerful enough to use this command. Oh well!');
        }
    }
}