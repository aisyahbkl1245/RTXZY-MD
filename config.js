
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
  // https://api.botcahx.live
//https://api.betabotz.me
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.btc
// - Contoh global.btc = 'xzRhejka'
// global.lann = 'trial'
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.

global.owner = ['6282376267531']  
global.mods = ['6282376267531'] 
global.prems = ['6282376267531']
global.nameowner = 'AISYAH'
global.numberowner = '6282376267531' 
global.mail = 'support@tioprm.my.id' 
global.dana = '6289669152489'
global.pulsa = '6289669152489'
global.gopay = '6289669152489'
global.namebot = 'AISYAHBOTZ'
global.gc = 'https://chat.whatsapp.com/GpaAvBS2BPZ1ugB9TF4IHs'
global.web = 'https://github.com/aisyahcntik'
global.instagram = 'https://instagram.com/aish_beban01'
global.wm = '© AISYAH'
global.watermark = wm
global.wm2 = '⫹⫺ AISYAH'
global.wm3 = '© AISYAH'
global.wm4 = '© BotWa'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'
global.alpiskey = 'YOUR_APIKEY_HERE' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'YOUR_APIKEY_HERE' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'YOUR_APIKEY_HERE' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'YOUR_APIKEY_HERE' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
