import FileMessage from "./FileMessage";
import {FakeFile} from "../file/File";
import { FakeChat } from "../chat/Chat";

describe("FileMessage", () => {
  it("has to send the file through", async () => {
    const fakeChat = new FakeChat()
    await new FileMessage(new FakeFile("http://example.com/file")).sendTo(fakeChat)

    expect(fakeChat.chatContent).toMatch(/\[file: http:\/\/example\.com\/file\]/)
  })
})