import TextMessage from "./TextMessage";
import { FakeChat } from "../chat/Chat";

describe("TextMessage", () => {
  it("must send a text message", async () => {
    const fakeChat = new FakeChat()
    await new TextMessage("Hello, world!").sendTo(fakeChat)

    expect(fakeChat.chatContent).toMatch(/Hello, world!/)
  })
})