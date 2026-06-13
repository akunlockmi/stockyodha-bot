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

// Server start karo
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server port ${PORT} pe chal raha hai`));
