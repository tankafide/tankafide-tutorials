import { Injectable } from '@angular/core';
import { Direction } from '../model/direction';
import { Step } from '../model/step';
import { Tutorial } from '../model/tutorial';

@Injectable()
export class TutorialService {

  constructor() { }

  buildDirection(text: string): Direction {
    return new Direction(text);
  }

  buildStep(directionsText: string[], subTitle?: string): Step {
    let directions: Direction[] = [];
    for(let directionText of directionsText){
      directions.push(this.buildDirection(directionText));
    }
    return new Step(directions, subTitle);
  }
  

  buildFirstTutorial(): Tutorial {
    let steps: Step[] = [];
    steps.push(
      this.buildStep(['gmail account / Credit card / $12 for domain',
        'Xcode - Mac Only- https://itunes.apple.com/us/app/xcode/id497799835?mt=12',
        'Click open in App Store', 'Click install button',
        'Git - Windows/Linux Only (git is included with Xcode)-  https://git-scm.com/book/en/v2/Getting-Started-Installing-Git',
        'NPM- (comes with node)  https://nodejs.org/en/download/package-manager/'], 'Pre Reqs')
    );
    steps.push(
      this.buildStep(['https://domains.google/  costs $12'], 'Get your domain')
    );
    steps.push(
      this.buildStep(['use Angular CLI to handle initial project setup https://cli.angular.io/', 
        'npm install -g @angular/cli', 'ng new [your-app-name]', 'cd [your-app-name]', 
        'ng serve - this will build your project locally on port 4200 as default: http://localhost:4200'], 'Build your project Angular Project')
    );
    steps.push(
      this.buildStep(['We will use Heroku to host our application mainly because it’s initially free.',
        'Create an Account: signup.heroku.com/', 
        'Download and install Heroku: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up',
        'Login in via terminal: heroku login', 'In terminal make sure you are in your apps root directory and type: heroku create'], 'Setup App Provider')
    );
    steps.push(
      this.buildStep(['the next section is taken from this great blog about deploying an Angular 2 app to Heroku: https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352',
      'Inside your apps package.json folder lets and a postinstall step into the scripts object: "scripts": { ... "postinstall": "ng build --aot -prod"}',
      'Change the start value inside of scripts to be this: "start": "node server.js"',
      'move the angular cli dependencies out of devDependinces and into dependencies: "dependencies":{ ... "@angular/compiler-cli": "[version#]", "angular-cli": "[version#]"}',
      'add and engines section to the package.json file the references your machines node and nom versions: *to find you node and nom versions type: node -v or npm -v in your terminal "engines:{"node": "[version#]", "npm":"[version#]"}"',
      'Create an express server: npm install --save express',
      'Create a file called server.js in your root directory and add this code: const express = require(\'express\'); const app = express(); app.use(express.static(__dirname + \'/dist\')); app.listen(process.env.PORT || 8080); const path = require(\'path\'); app.get(\'/*\', function(req, res) {   res.sendFile(path.join(__dirname + \'/dist/index.html\')); });',
      'add and commit your code to git then push to heroic: git add .   git commit -m "first deploy"   git push heroku master',
      'Use the url listed a few lines up ([random-name].herokuapp.com/)'], 'Setup App Deploy Process')
    );

    steps.push(
      this.buildStep(['In terminal: heroku domains:add www.[yourDomain].com   heroku domains:add [yourDomain].com',
        'Now view you DNS Target by typing: heroku domains', 'We will use the url under DNS target that begins with www.'], 'Prep Heroku for your domain')
    );

    steps.push(
      this.buildStep(['Nav to domains.google.com', 'Once you are logged in with the account you created the domain with you should see your domain with several tabs following it',
      'Click on the DNS tab', 'Scroll down to Custom resource records', 
      'In the name box input www', 'Select CNAME as your type', 'And finally in the address box paste you heroku domain with a ‘.’ Added at the end then click add',
      'Now scroll up to the Synthetic records section', 'In the subdomain box input ‘@’ and in the destination url input your sites full url http://www.[yourSiteName].com',
      'Click add'], 'Configure google domain')
    );
    steps.push(
      this.buildStep(['Wait for Google to apply your sites dns change.  After a few min my site was active though Google says depending on your location it could take a few days.'], 'Grab your popcorn')
    );
    return new Tutorial(
      steps, 'How to Deploy an Angular 4 to the World Wide Web in a few minutes'
    );;
  }


  getTutorial(id?: number): Tutorial{
    return this.buildFirstTutorial();
  }

}
