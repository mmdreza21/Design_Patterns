export abstract class Window {
  protected title: string;

  constructor(title: string) {
    this.title = title;
  }

  // This is the template method
  public close(): void {
    console.log(`Closing window: ${this.title}`);
    this.beforeClose();
    console.log(`Window ${this.title} is now closed.`);
    this.afterClose();
  }

  // Hooks to be implemented by subclasses
  protected abstract beforeClose(): void;
  protected abstract afterClose(): void;
}
