const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAADMZA1p03rkBAIqcakCZBVFrbAVBUZCG1Jy371XjUhcC4pVAXwUDkpuj0VHKQtAlZCDDs1W0EwNJyIEnlxrYc50R4ZCeOCGO8ZCQGoCMIJZBL03exTsiue8pl0ksQwQfQvzua4jA1wmd2Aaxy52TRkb3gUPqKKFfphxdXeZA645ugZDZD',
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
    text = `Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`;
    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(process.env.PORT || 5000)
console.log('Echo bot server running at port ' + (process.env.PORT || 5000))