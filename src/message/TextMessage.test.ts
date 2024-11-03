import Chat from "../chat/Chat";
import TextMessage from "./TextMessage";

describe("TextMessage", () => {
  it("должен отправить текстовое сообщение через Chat", async () => {
    const mockChat: Chat = {
      sendText: jest.fn(),
      sendImage: jest.fn(),
      sendFile: jest.fn()
    };

    const textMessage = new TextMessage("Hello, world!");

    await textMessage.sendTo(mockChat);

    expect(mockChat.sendText).toHaveBeenCalledWith("Hello, world!");
    expect(mockChat.sendText).toHaveBeenCalledTimes(1);
  });
});
