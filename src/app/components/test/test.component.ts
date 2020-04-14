import { Component, Input } from '@angular/core';

@Component({
  selector: 'test',
  template: `<h2>this is a test {{guineapigtext}}!</h2>`,
  styleUrls: [ './test.component.css' ]
})
export class TestComponent  {
  @Input() guineapigtext: string;
}
