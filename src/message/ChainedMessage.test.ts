import ChainedMessage from "./ChainedMessage";
import TextMessage from "./TextMessage";
import FileMessage from "./FileMessage";
import { FakeChat } from "../chat/Chat";
import {FakeFile} from "../file/File";

describe("ChainedMessage", () => {
  it("must send multiple messages in sequence", async () => {
    const fakeChat = new FakeChat();
    await new ChainedMessage([
      new TextMessage("First message"),
      new FileMessage(new FakeFile("http://example.com/file"))
    ]).sendTo(fakeChat);

    expect(fakeChat.chatContent).toMatch(/First message\s+\[file: http:\/\/example\.com\/file\]/);
  });
});
