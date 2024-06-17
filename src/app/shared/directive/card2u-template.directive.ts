import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cTemplate]'
})
export class Card2uTemplateDirective {

  @Input('cTemplate')
  name!: string;

  constructor(public templateRef: TemplateRef<unknown>) { }
  public getType(): string {
    return this.name;
  }
}
