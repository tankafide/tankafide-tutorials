import { Component, Input, AfterViewChecked } from '@angular/core';

import { Step } from '../../../model/step';
import { Direction } from '../../../model/direction';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements AfterViewChecked {

    @Input() step: Step;

    direction: Direction;

    testCode: string = '';

    ngOnInit(): void {
        console.log('getting tutorials');
        this.direction = this.step.directions[0];
    }

    ngAfterViewChecked(){
      console.log('ngAfterViewChecked')
      PR.prettyPrint();
  }

}