let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 14000000) return // setiap 24 jam sekali
    await this.send2Button(m.chat, `
Hai, ${ucapan()} ${conn.getName(m.sender)}
${user.banned ? 'kamu dibanned' : '*Budi Sedang Tidak Online*\n```Saya Akan Balas Secepat Mungkin```'}
`.trim(), 'ᴘᴇsᴀɴ ɪɴɪ ᴅɪ ʙᴀʟᴀs ᴏʟᴇʜ ʙᴏᴛ', 'Iyaa Saya Tunggu', '. ', 'Ya', '.ha',  m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
