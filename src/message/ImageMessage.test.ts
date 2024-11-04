import ImageMessage from "./ImageMessage";
import {FakeFile} from "../file/File";
import { FakeChat } from "../chat/Chat";


describe("ImageMessage", () => {
  it("has to send the image through", async () => {
    const fakeChat = new FakeChat();
    const fakeImage = new FakeFile("http://example.com/image");
    const imageMessage = new ImageMessage(fakeImage);

    await imageMessage.sendTo(fakeChat);

    expect(fakeChat.chatContent).toContain("Image: [file: http://example.com/image]");
  });
});