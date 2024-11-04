import FakeChat from "../chat/FakeChat";
import ChainedMessage from "./ChainedMessage";
import TextMessage from "./TextMessage";
import FileMessage from "./FileMessage";
import File from "../file/File";

describe("ChainedMessage", () => {
  it("должен отправить несколько сообщений последовательно через FakeChat", async () => {
    const fakeChat = new FakeChat();

    const textMessage = new TextMessage("First message");
    const mockFile = {} as File;
    const fileMessage = new FileMessage(mockFile);
    const chainedMessage = new ChainedMessage(textMessage, fileMessage);

    await chainedMessage.sendTo(fakeChat);

    expect(fakeChat.chatContent).toMatch(/Text: First message\s+File: \[file: \[object Object\]\]/);
  });
});
