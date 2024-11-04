import ChainedMessage from "./ChainedMessage";
import TextMessage from "./TextMessage";
import FileMessage from "./FileMessage";
import File from "../file/File";
import { FakeChat } from "../chat/Chat";

describe("ChainedMessage", () => {
  it("must send multiple messages in sequence", async () => {
    const fakeChat = new FakeChat();

    const textMessage = new TextMessage("First message");
    const mockFile = {} as File;
    const fileMessage = new FileMessage(mockFile);
    const chainedMessage = new ChainedMessage([textMessage, fileMessage]);

    await chainedMessage.sendTo(fakeChat);

    expect(await fakeChat.chatContent).toMatch(/Text: First message\s+File: \[file: \[object Object\]\]/);
  });
});