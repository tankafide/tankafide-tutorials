import { Component } from '@angular/core';

import { Tutorial } from '../../model/tutorial';
import { TutorialService } from '../../service/tutorial.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

    tutorial: Tutorial;
    constructor(private tutorialService: TutorialService) { }

    getTutorials(): void {
        this.tutorial = this.tutorialService.getTutorial();
        this.tutorial.log();
    }
    
    ngOnInit(): void {
        console.log('getting tutorials');
        this.getTutorials();
    }

}