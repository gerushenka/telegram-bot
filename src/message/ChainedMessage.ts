import Chat from "../chat/Chat";
import Message from "./Message";

export default class ChainedMessage implements Message {
  private messages: Message[];

  constructor(...messages: Message[]) {
    this.messages = messages;
  }

  async sendTo(context: Chat): Promise<void> {
    for (const message of this.messages) {
      await message.sendTo(context);
    }
  }
}
