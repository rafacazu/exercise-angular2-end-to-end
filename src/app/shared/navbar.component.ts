import {Component} from '@angular/core';

@Component({
    selector: 'navi-bar',
    template: `
        <div class="top-bar">
            <div class="top-bar-title">Gigabyte gaming cmpany</div>
            <div>
                <ul class="menu">
                    <li class="nav-menu"><a [routerLink]="['/admin']" >Shop</a></li>
                    <li class="nav-menu"><a [routerLink]="['/shop']" >Admin Area</a></li>
                </ul>
            </div>
        </div>
    `,
    styleUrls:['./navbar.component.css']
})
export class NavComponent {}