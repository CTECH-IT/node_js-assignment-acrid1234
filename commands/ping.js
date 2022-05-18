module.exports = {
    name: 'ping',
    description: 'this is a ping command',
    execute(message, args){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply('Pong! This message has a latency of ' + timeTaken + " milliseconds");
    }
}