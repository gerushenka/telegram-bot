
import TextMessage from "./TextMessage";
import { FakeChat } from "../chat/Chat";

describe("TextMessage", () => {
  it("must send a text message", async () => {
    const fakeChat = new FakeChat();
    const textMessage = new TextMessage("Hello, world!");

    await textMessage.sendTo(fakeChat);

    await expect(fakeChat.chatContent).resolves.toContain("Text: Hello, world!");
  });
});