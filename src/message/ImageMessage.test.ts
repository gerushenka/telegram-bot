import ImageMessage from "./ImageMessage";
import File from "../file/File";
import { FakeChat } from "../chat/Chat";

describe("ImageMessage", () => {
  it("has to send the image through", async () => {
    const fakeChat = new FakeChat();
    const mockImage = {} as File;
    const imageMessage = new ImageMessage(mockImage);

    await imageMessage.sendTo(fakeChat);

    await expect(fakeChat.chatContent).resolves.toContain("Image: [file: [object Object]]");
  });
});