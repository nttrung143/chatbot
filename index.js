const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAYC6ZAQ6rRABAESyB9lZCbNVAkZCQnp5f78FBUFDiGd2VNF0du08A3v0l4LCDTqNZBVYsh8LcfNHUUaqh2VantYQZAdNQ638A8RtVtDZBEAMPRj2J6IxiCOZC6C8x1VL6z1JC2EQpBrA2ypB0pCeAxZCbp81C5935pHuVIlWjTaCwZDZD',
  verify: '123456',
//   app_secret: 'APP_SECRET'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
console.log('Echo bot server running at port 3000.')