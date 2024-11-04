import FakeChat from "../chat/FakeChat";
import TextMessage from "./TextMessage";

describe("TextMessage", () => {
  it("должен отправить текстовое сообщение через FakeChat", async () => {
    const fakeChat = new FakeChat();
    const textMessage = new TextMessage("Hello, world!");

    await textMessage.sendTo(fakeChat);

    expect(fakeChat.chatContent).toContain("Text: Hello, world!");
  });
});
