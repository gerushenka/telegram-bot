import Chat from "../chat/Chat";
import FileMessage from "./FileMessage";
import File from "../file/File";

describe("FileMessage", () => {
  it("должен отправить файл через Chat", async () => {
    const mockChat: Chat = {
      sendText: jest.fn(),
      sendImage: jest.fn(),
      sendFile: jest.fn()
    };

    const mockFile = {} as File;
    const fileMessage = new FileMessage(mockFile);

    await fileMessage.sendTo(mockChat);

    expect(mockChat.sendFile).toHaveBeenCalledWith(mockFile);
    expect(mockChat.sendFile).toHaveBeenCalledTimes(1);
  });
});
