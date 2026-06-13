require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Health check — Render ke liye zaroori hai
app.get('/', (req, res) => res.send('StockYodha bot chal raha hai!'));

// /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
    `🌿 *StockYodha — DivAlert*\n\nNamaste! Dividend alerts ab Telegram pe milenge.\n\n/watchlist — stocks dekho\n/calendar — upcoming events\n/help — madad`,
    { parse_mode: 'Markdown' }
  );
});

// /watchlist command
bot.onText(/\/watchlist/, (msg) => {
  bot.sendMessage(msg.chat.id,
    `📌 *Tumhari Watchlist:*\n\nTCS — Yield: 4.1% | Ex-date: June 10\nINFY — Yield: 3.2% | Ex-date: June 20\n\nApp se aur stocks add karo!`,
    { parse_mode: 'Markdown' }
  );
});

// /calendar command
bot.onText(/\/calendar/, (msg) => {
  bot.sendMessage(msg.chat.id,
    `📅 *Agle 30 din ke events:*\n\n🔴 June 10 — TCS Ex-dividend\n💚 June 15 — TCS Payment\n🔴 June 20 — Infosys Ex-dividend\n💚 June 25 — Infosys Payment`,
    { parse_mode: 'Markdown' }
  );
});

// /help command
bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id,
    `🆘 *StockYodha Help:*\n\n/start — Bot shuru karo\n/watchlist — Apni stocks dekho\n/calendar — Upcoming dividends\n/help — Ye message`,
    { parse_mode: 'Markdown' }
  );
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`StockYodha bot port ${PORT} pe chal raha hai`));