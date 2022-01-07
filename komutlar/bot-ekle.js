module.exports = {
  name: "bot-ekle",
  code: `
$sendDm[$authorID;⚒ \`\$userTag[$noMentionMessage[1]]\`\ Adlı Botunuz İçin Başvuru Yaptıniz Yetkililerimiz Botunuzla İlgilenecektir]
$channelSendMessage[$getServerVar[botlog];🎋 | <@$authorID> \`\$userTag[$noMentionMessage[1]]\`\ Adlı Botun Sisteme Eklendi ]
$apiMessage[$getServerVar[ytlog];;<@&$getServerVar[ytrolid]>{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:
Bir Bot Sisteme Eklendi

⚒ | Botun Sahibi : \`\$userTag[$authorID]\`\

⚒ | Bot Sahip İD : \`\$authorID\`\

🎋 | Bot Ismi : \`\$userTag[$noMentionMessage[1]]\`\

🎋 | Bot ID : \`\$noMentionMessage[1]\`\

🎋 | Bot Kurulma Tarihi : \`\$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$noMentionMessage[1];time]; years; Yıl;-1]; year; Yıl;-1];months;Ay;-1];month;Ay;-1];weeks;Hafta;-1];week;Hafta;-1];days;Gün;-1];day;Gün;-1];hours;Saat;-1];hour;Saat;-1];minutes; Dakika;-1];minute; Dakika;-1];and; ve;-1];seconds; Saniye;-1];second; Saniye;-1]\`\

🎋 | Bot Prefixi : \`\$noMentionMessage[2]\`\

🎋 | Bot DBL Durumu : \`\$noMentionMessage[3]\`\

[Bot 0 Perm](https://discord.com/oauth2/authorize?client_id=$noMentionMessage[1]&scope=bot+applications.commands&permissions=0)  [Bot 8 Perm](https://discord.com/oauth2/authorize?client_id=856080869790056448&scope=bot+applications.commands&permissions=8)


**Bot Sisteme Kaydedildi Bot Gereksinimleri Karşılıyorsa Lütfen Onay Butonuna Tıklayın Eğer Çalışmıyorsa Red Butonuna Tıklayın**};{actionRow:Onay,2,1,onay:Red,2,2,hayır}]
$setServerVar[kayıtlıbot;$noMentionMessage[1];$authorID]
$setServerVar[botvar;var;$authorID]
$onlyIf[$getServerVar[botvar;$authorID]==$getServerVar[botvar;var;$authorID];🎋 | Sistemde Zaten Ekli Botunuz Var]
$onlyIf[$noMentionMessage[3]!=;🎋 | Lütfen Botun DBL Durumunu Girin]
$onlyIf[$noMentionMessage[2]!=;🎋 | Lütfen Botun Prefixini Girin]
$onlyIf[$noMentionMessage[1]!=;🎋 | Lütfen Botun IDsini Girin]
$onlyIf[$isNumber[$noMentionMessage[1]]==true;🎋 | Lütfen Bir Bot IDsi Dışında Başka Birşey Girmeyin!]
$onlyForChannels[$getServerVar[botekle];🎋 | Bu Komutu Sadece Bot-Ekle Kanalında Kullanabilirsin!]
$deleteIn[5s]
`
};

////Üsendim Az Dursun Amqihh
