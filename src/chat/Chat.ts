import File from "../file/File";

export default interface Chat {
  sendText(message: string): Promise<void>;
  sendImage(image: File): Promise<void>;
  sendFile(file: File): Promise<void>;
}

export class FakeChat implements Chat {
  public chatContent = '';

  async sendText(message: string): Promise<void> {
    this.chatContent += `\n\nText: ${message}`;
  }

  async sendImage(image: File): Promise<void> {
    this.chatContent += `\n\nImage: [file: ${(await image.url()).toString()}]`;
  }

  async sendFile(file: File): Promise<void> {
    this.chatContent += `\n\nFile: [file: ${(await file.url()).toString()}]`;
  }
}
