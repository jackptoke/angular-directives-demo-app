import { Directive, input } from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {

  queryParam = input('myApp')

  constructor() {
    console.log("SafeLinkDirective !!");
  }

  onConfirmLeavePage(event: MouseEvent) {
    const leave = window.confirm("Are you sure? ");

    if(leave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam()
      return;
    }

    event?.preventDefault();
  }
}
