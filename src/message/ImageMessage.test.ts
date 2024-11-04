import ImageMessage from "./ImageMessage";
import File from "../file/File";
import { FakeChat } from "../chat/Chat";

describe("ImageMessage", () => {
  it("has to send the image through", async () => {
    const fakeChat = new FakeChat();
    const mockImage = {} as File;
    const imageMessage = new ImageMessage(mockImage);

    await imageMessage.sendTo(fakeChat);

    expect(await fakeChat.chatContent).toContain("Image: [file: [object Object]]");
  });
});
