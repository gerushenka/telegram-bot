import Chat from "../chat/Chat";
import Message from "./Message";

export default class TextMessage implements Message {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  async sendTo(context: Chat): Promise<void> {
    await context.sendText(this.text);
  }
}
