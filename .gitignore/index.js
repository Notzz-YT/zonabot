const discord = require('discord.js');
const client  = new discord.Client()

client.on('ready', function(){
    console.log('Bot => OK')
    client.user.setGame('zonaria.fr').catch(console.error)
})

client.on('message', function (message){

        if(message.content === 'Bonjour'){
            message.reply('Bonjour à vous :D')
        }
})

client.login('NTY4Nzg2MjQ0MjY4NTg5MTA1.XRRwfw.dbGLWJuHWHNhGDJh63MB54tkHD4')
