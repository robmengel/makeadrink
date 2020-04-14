import { Component, Input } from '@angular/core';

@Component({
  selector: 'test',
  template: `<h2>This is a test component {{guineapigtext}}!</h2>`,
  styles: [`h1 { font-family: Roboto; }`]
})
export class TestComponent  {
  @Input() guineapigtext: string;
}
