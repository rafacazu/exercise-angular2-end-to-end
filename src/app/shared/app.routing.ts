import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {ErrorComponent} from '../error/error.component';
import {FilterComponent} from '../filter/filter.component';
import {MessageComponent} from '../message/message.component';
import {BlogDetailComponent} from '../blogDetail/blog-detail.component';

@NgModule({
    imports:[
        RouterModule.forRoot([
            {path: 'post/:id', component: BlogDetailComponent},
            {path: '', component: HomeComponent},
            {path: 'news', component: FilterComponent},
            {path: 'message', component: MessageComponent},
            {path: '**', component: ErrorComponent}
        ])
    ],
    exports:[
        RouterModule
    ],
    declarations: [
        BlogDetailComponent
    ]
})
export class AppRoutingModule{}