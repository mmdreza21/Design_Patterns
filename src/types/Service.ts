export abstract class Service {
  constructor() {
    console.log(`${this.constructor.name} implements the class `);
  }
  static test(): void {
    console.log(`${this.name} implements the class `);
  }
}
