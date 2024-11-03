import Chat from "../chat/Chat";
import Message from "./Message";
import File from "../file/File";

export default class FileMessage implements Message {
  private file: File;

  constructor(file: File) {
    this.file = file;
  }

  async sendTo(context: Chat): Promise<void> {
    await context.sendFile(this.file);
  }
}
