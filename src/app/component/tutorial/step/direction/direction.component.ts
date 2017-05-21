import { Component, Input } from '@angular/core';
import { Direction } from '../../../../model/direction';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent {
    
    @Input() direction: Direction;
    
}