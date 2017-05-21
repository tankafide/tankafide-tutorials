import { Direction } from './direction';

export class Step {
  directions: Direction[];
  subTitle?: string;

  constructor(directions: Direction[], subTitle?: string) {
    this.directions = directions;
    this.subTitle = subTitle;
  }

  log(stepNumber?: number){
    console.log(' Step: ' + stepNumber);
    console.log('  subTitle: ' + this.subTitle);
    for(let direction of this.directions){
      direction.log();
    }
  }
}