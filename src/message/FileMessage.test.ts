import FileMessage from "./FileMessage";
import File from "../file/File";
import { FakeChat } from "../chat/Chat";

describe("FileMessage", () => {
  it("has to send the file through", async () => {
    const fakeChat = new FakeChat();
    const mockFile = {} as File;
    const fileMessage = new FileMessage(mockFile);

    await fileMessage.sendTo(fakeChat);

    await expect(fakeChat.chatContent).resolves.toContain("File: [file: [object Object]]");
  });
});