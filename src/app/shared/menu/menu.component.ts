import { Component } from '@angular/core';

interface menuItem {
  route: string,
  text: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class MenuComponent {

  menu: menuItem[] = [
    {
      route: '/graphics/bars',
      text: 'Bars'
    },
    {
      route: '/graphics/double-bars',
      text: 'Double Bars'
    },
    {
      route: '/graphics/donut',
      text: 'Donut'
    },
    {
      route: '/graphics/donut-http',
      text: 'Donut Http'
    },
  ]

}
