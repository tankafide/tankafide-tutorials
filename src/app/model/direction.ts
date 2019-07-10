export class Direction {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  log(){
    console.log('  direction: ' + this.text);
  }
}