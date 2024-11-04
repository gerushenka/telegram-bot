import FakeChat from "../chat/FakeChat";
import ImageMessage from "./ImageMessage";
import File from "../file/File";

describe("ImageMessage", () => {
  it("должен отправить изображение через FakeChat", async () => {
    const fakeChat = new FakeChat();
    const mockImage = {} as File;
    const imageMessage = new ImageMessage(mockImage);

    await imageMessage.sendTo(fakeChat);

    expect(fakeChat.chatContent).toContain("Image: [file: [object Object]]");
  });
});
