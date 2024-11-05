import ImageMessage from "./ImageMessage"
import {FakeFile} from "../file/File"
import { FakeChat } from "../chat/Chat"

describe("ImageMessage", () => {
  it("has to send the image through", async () => {
    const fakeChat = new FakeChat()
    await new ImageMessage(new FakeFile("http://example.com/image")).sendTo(fakeChat)

    expect(fakeChat.chatContent).toMatch(/\[file: http:\/\/example\.com\/image\]/)
  })
})