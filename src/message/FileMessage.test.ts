import FakeChat from "../chat/FakeChat";
import FileMessage from "./FileMessage";
import File from "../file/File";

describe("FileMessage", () => {
  it("должен отправить файл через FakeChat", async () => {
    const fakeChat = new FakeChat();
    const mockFile = {} as File;
    const fileMessage = new FileMessage(mockFile);

    await fileMessage.sendTo(fakeChat);

    expect(fakeChat.chatContent).toContain("File: [file: [object Object]]");
  });
});
