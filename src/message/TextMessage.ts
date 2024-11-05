import Chat from "../chat/Chat"
import Message from "./Message"

export default class TextMessage implements Message {
  constructor(
    private readonly text: string
  ) {}

  async sendTo(context: Chat): Promise<void> {
    await context.sendText(this.text)
  }
}
