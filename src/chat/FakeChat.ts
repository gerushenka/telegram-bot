import File from "../file/File";
import Chat from "./Chat";

class FakeChat implements Chat {
  public chatContent = '';

  sendText(message: string): Promise<void> {
    this.chatContent += `\n\nText: ${message}`;
    return Promise.resolve();
  }

  sendImage(image: File): Promise<void> {
    this.chatContent += `\n\nImage: [file: ${image.toString()}]`;
    return Promise.resolve();
  }

  sendFile(file: File): Promise<void> {
    this.chatContent += `\n\nFile: [file: ${file.toString()}]`;
    return Promise.resolve();
  }
}

export default FakeChat;
