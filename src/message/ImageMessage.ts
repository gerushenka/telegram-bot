import Chat from "../chat/Chat";
import Message from "./Message";
import File from "../file/File";

export default class ImageMessage implements Message {
  constructor(
    private readonly image: File
  ) {}

  async sendTo(context: Chat): Promise<void> {
    await context.sendImage(this.image)
  }
}
