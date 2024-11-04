import * as dotenv from 'dotenv';
dotenv.config();

import { Telegraf } from 'telegraf';
import File from './File';

export default class TelegramFile implements File {
  private bot: Telegraf;
  private fileId: string;

  constructor(bot: Telegraf, fileId: string) {
    this.bot = bot;
    this.fileId = fileId;
  }

  async url(): Promise<URL> {
    try {
      const fileInfo = await this.bot.telegram.getFile(this.fileId);
      const filePath = fileInfo.file_path;
      return new URL(`https://api.telegram.org/file/bot${process.env['TELEGRAM_BOT_TOKEN']}/${filePath}`);
    } catch (error) {
      throw new Error('Не удалось получить URL файла');
    }
  }
}
