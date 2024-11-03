import Chat from "../chat/Chat";
import ChainedMessage from "./ChainedMessage";
import TextMessage from "./TextMessage";
import FileMessage from "./FileMessage";
import File from "../file/File";

describe("ChainedMessage", () => {
  it("должен отправить несколько сообщений последовательно через Chat", async () => {
    const mockChat: Chat = {
      sendText: jest.fn(),
      sendImage: jest.fn(),
      sendFile: jest.fn()
    };

    const textMessage = new TextMessage("First message");
    const mockFile = {} as File;
    const fileMessage = new FileMessage(mockFile);
    const chainedMessage = new ChainedMessage(textMessage, fileMessage);

    await chainedMessage.sendTo(mockChat);

    expect(mockChat.sendText).toHaveBeenCalledWith("First message");
    expect(mockChat.sendText).toHaveBeenCalledTimes(1);

    expect(mockChat.sendFile).toHaveBeenCalledWith(mockFile);
    expect(mockChat.sendFile).toHaveBeenCalledTimes(1);
  });
});
