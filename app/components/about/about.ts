import {Component, View} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'about'
})
@View({
  template: `
    Welcom to the about page! This is The ID: {{id}}
  `
})
export class About {
  // TODO public or private
  id: string;
  constructor(params: RouteParams) {
    this.id = params.get('id');
  }
}
