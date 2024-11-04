import ChainedMessage from "./ChainedMessage";
import TextMessage from "./TextMessage";
import FileMessage from "./FileMessage";
import { FakeChat } from "../chat/Chat";
import {FakeFile} from "../file/File";

describe("ChainedMessage", () => {
  it("must send multiple messages in sequence", async () => {
    const fakeChat = new FakeChat();

    const textMessage = new TextMessage("First message");
    const fakeFile = new FakeFile("http://example.com/file");
    const fileMessage = new FileMessage(fakeFile);
    const chainedMessage = new ChainedMessage([textMessage, fileMessage]);

    await chainedMessage.sendTo(fakeChat);

    expect(fakeChat.chatContent).toContain("Text: First message");
    expect(fakeChat.chatContent).toContain("File: [file: http://example.com/file]");
  });
});