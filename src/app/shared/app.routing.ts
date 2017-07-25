import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {ErrorComponent} from '../error/error.component';
import {FilterComponent} from '../filter/filter.component';
import {MessageComponent} from '../message/message.component';

@NgModule({
    imports:[
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'news', component: FilterComponent},
            {path: 'message', component: MessageComponent},
            {path: '**', component: ErrorComponent}
        ])
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}