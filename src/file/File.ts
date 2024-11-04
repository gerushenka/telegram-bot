export default interface File {
  url(): Promise<URL>
}

export class FakeFile implements File {
  private urlValue: string;

  constructor(urlValue: string) {
    this.urlValue = urlValue;
  }

  async url(): Promise<URL> {
    return new URL(this.urlValue);
  }
}