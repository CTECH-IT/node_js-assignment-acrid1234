const { MessageAttachment, MessageEmbed } = require("discord.js");

module.exports = {
    name: "image",
    description: "send image",
    async execute (message, args) {
        const attachment = new MessageAttachment('https://previews.123rf.com/images/derocz/derocz1605/derocz160500012/56478457-%E5%85%9A%E3%81%AE%E4%BA%BA%E3%80%85-%E3%81%AE%E3%83%80%E3%83%B3%E3%82%B9%E3%81%AE%E3%82%B7%E3%83%AB%E3%82%A8%E3%83%83%E3%83%88-%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88-%E8%83%8C%E6%99%AF%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB.jpg')

        message.reply({ files: [attachment]});
    }
}