import FileMessage from "./FileMessage";
import {FakeFile} from "../file/File";
import { FakeChat } from "../chat/Chat";

describe("FileMessage", () => {
  it("has to send the file through", async () => {
    const fakeChat = new FakeChat();
    const fakeFile = new FakeFile("http://example.com/file");
    const fileMessage = new FileMessage(fakeFile);

    await fileMessage.sendTo(fakeChat);

    expect(fakeChat.chatContent).toContain("File: [file: http://example.com/file]");
  });
});