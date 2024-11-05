import Chat from "../chat/Chat";
import Message from "./Message";
import File from "../file/File";

export default class FileMessage implements Message {

  constructor(
    private readonly file: File
  ) {}

  async sendTo(context: Chat): Promise<void> {
    await context.sendFile(this.file)
  }
}
