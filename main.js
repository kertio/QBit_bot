import {Telegraf} from "telegraf";
import { config  } from "dotenv";
config();

const bot = new Telegraf(process.env.TOKEN);

bot.start(ctx => ctx.reply(`Hello, ${ctx.chat.first_name}`));

bot.launch();


process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))