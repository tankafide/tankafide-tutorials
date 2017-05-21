import { Component, Input } from '@angular/core';

import { Step } from '../../../model/step';
import { Direction } from '../../../model/direction';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent {

    @Input() step: Step;

    direction: Direction;

    ngOnInit(): void {
        console.log('getting tutorials');
        this.direction = this.step.directions[0];
    }

}