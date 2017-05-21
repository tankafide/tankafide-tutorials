import { Step } from './step';

export class Tutorial {
  steps: Step[];
  title: string;

  constructor(steps: Step[], title: string) {
    this.steps = steps;
    this.title = title;
  }

  log(){
    console.log('Tutorial: ');
    console.log(' title: ' + this.title);
    for(let i = 0; i < this.steps.length; i++){
      this.steps[i].log(i);
    }
  }
}
