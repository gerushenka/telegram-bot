import Chat from "../chat/Chat";
import ImageMessage from "./ImageMessage";
import File from "../file/File";

describe("ImageMessage", () => {
  it("должен отправить изображение через Chat", async () => {
    const mockChat: Chat = {
      sendText: jest.fn(),
      sendImage: jest.fn(),
      sendFile: jest.fn()
    };

    const mockImage = {} as File;
    const imageMessage = new ImageMessage(mockImage);

    await imageMessage.sendTo(mockChat);

    expect(mockChat.sendImage).toHaveBeenCalledWith(mockImage);
    expect(mockChat.sendImage).toHaveBeenCalledTimes(1);
  });
});
