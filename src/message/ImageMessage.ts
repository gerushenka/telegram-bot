import Chat from "../chat/Chat";
import Message from "./Message";
import File from "../file/File";

export default class ImageMessage implements Message {
  private image: File;

  constructor(image: File) {
    this.image = image;
  }

  async sendTo(context: Chat): Promise<void> {
    await context.sendImage(this.image);
  }
}
