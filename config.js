const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_56_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICA1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDc2LFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY1LFxuICAgICAgICA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgODIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMixcbiAgICAgICAgMTIwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDYwLFxuICAgICAgICA5MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUzLFxuICAgICAgICA2NixcbiAgICAgICAgMTAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODksXG4gICAgICAgIDc3LFxuICAgICAgICA3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDcwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3WGV6U3Niblh5alFFc3J1bUNEVTN0VzRoZmwzVDZ2c1R3K2Nhcnprb0tzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE5NDE0MzI3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDk5RDRGNERFMENEMjg2NUU1QjJFRTE4ODBBOTI4OENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMTM2MjA3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFNS2JYZXdUUTRTRnVYNkZwUmNqa0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmJmNGY2N2UtNTUxZS00YTc1LWJkOGItMWJlN2Y0YTU3MTYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDE2MSxcbiAgICAgIDExMCxcbiAgICAgIDIyNSxcbiAgICAgIDIxNyxcbiAgICAgIDEwMCxcbiAgICAgIDY4LFxuICAgICAgMTk1LFxuICAgICAgMjUwLFxuICAgICAgMTY4LFxuICAgICAgMjM2LFxuICAgICAgMTIzLFxuICAgICAgMjI0LFxuICAgICAgMTQ5LFxuICAgICAgMjIwLFxuICAgICAgMjQ3LFxuICAgICAgMTQ2LFxuICAgICAgMTQ2LFxuICAgICAgOTQsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICA3OCxcbiAgICAgIDIsXG4gICAgICA4NixcbiAgICAgIDgwLFxuICAgICAgNzQsXG4gICAgICAyMDMsXG4gICAgICAzLFxuICAgICAgNzAsXG4gICAgICAxMCxcbiAgICAgIDIwMixcbiAgICAgIDc5LFxuICAgICAgNjUsXG4gICAgICAyNTEsXG4gICAgICAyMTUsXG4gICAgICAxMzcsXG4gICAgICAyMTEsXG4gICAgICAyMjUsXG4gICAgICAyMTIsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCWjVFRDVIQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTk0MTQzMjcwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKdW5haWQgTWFsaWtcIixcbiAgICBcImxpZFwiOiBcIjE5NDMzMDU3Njg2NzU1MDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01UYXlNb0ZFTWJ4MDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSC8xNnNaSWpib1U5SEVFSnFBVWNuZCtZUW1KeDU0cWFDNER2RUk5L1ozaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXKzc5NTJhWHlzTnNDZlcwSjhqWDA5RjRZdk1NRFVqVjFJcGJGYVphQWdsVjNOYzhMa0JBeElINGV2dGlQbUJVRFplWWMwN0plN2VxN1FjTnFDNkNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjaUZ4bnBnRnZTRThlcW9hRkhUckszZTNMbGxESk1wR0ZodFFiZ2NvbkRQYmNzeGxtYkIyU29sNlhNcllDUk1yYW00QXBZanhmVnhhZ2xVcWdHNFVoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTQxNDMyNzA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxMzYyMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFENXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ1cy5qc29uIjogIntcImtleURhdGFcIjpcIjlNNWF6MUhRTGRWZVF5NENsbFhXc01lNjlkeEY0L0c0SzcwUkIxMElBelk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ5ODU1Nzc2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIzMTM2MjA0NTY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
