let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• sᴠ ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ ᴏʀᴀɴɢɴʏᴀ ʙᴀɪᴋ ʀᴀᴍᴀʜ ᴀsɪᴋ
• ᴏᴡɴᴇʀ ʙᴇʀʜᴀᴋ ʙʟᴏᴋɪʀ ᴛᴀɴᴘᴀ ᴀʟᴀsᴀɴ
• ʙɪᴄᴀʀᴀʟᴀʜʏᴀɴɢ sᴏᴘᴀɴ & ᴛɪᴅᴀᴋ sᴘᴀᴍ
• ᴏᴡɴᴇʀ ʜᴀɴʏᴀ ᴍᴇʀᴇsᴘᴏɴᴅ ʙᴇʀᴋᴀɪᴛᴀɴ ᴅᴇɴɢᴀɴ ʙᴏᴛ
• ɴᴏ ᴛᴇʟᴘ sᴘᴀᴍ`

//------------ BIO
let ppown = await conn.profilePictureUrl(6285838142263 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : Muklis
${htjava} *✉️ Nama RL* : Klis
${htjava} *♂️ Gender* : Boys
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : Private 🥶
${htjava} *🎨 Umur* : 15
${htjava} *🧮 Kelas* : X[10]
${htjava} *🧩 Hobby* : Bola
${htjava} *💬 Sifat* : ASIK DAH KALAU DAH KENAL
${htjava} *🗺️ Tinggal* : Indonesia Lampung utara
${htjava} *❤️ Waifu* : -

${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *🐈 ɢɪᴛʜᴜʙ:* ${sgh}
•·––––––––––––––––––––––––––·•
`
  let teks = '𝙿𝙸𝙻𝙸𝙷 𝙳𝙸 𝙱𝙰𝚆𝙰𝙷!!!'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	{title: "📱 • Nomor Owner1", rowId: ".owner nomor"},
	{title: "📱 • Nomor Owner2", rowId: ".whmods1"},
	{title: "📱 • Pengembang", rowId: ".whmods2"},
	{title: "📱 • Creator", rowId: ".whmods3"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	{title: "🌎 • Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
