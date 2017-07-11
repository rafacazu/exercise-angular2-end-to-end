import {Component} from '@angular/core';

@Component({
    selector: 'navi-bar',
    template: `
        <div class="top-bar">
            <div class="top-bar-title">Gigabyte gaming cmpany</div>
            <div>
                <ul class="menu">
                    <li><a>Menu item 1</a></li>
                </ul>
            </div>
        </div>
    `,
    styleUrls:['./navbar.component.css']
})
export class NavComponent {}