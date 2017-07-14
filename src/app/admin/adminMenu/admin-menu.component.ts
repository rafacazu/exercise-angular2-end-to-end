import {Component, OnInit} from '@angular/core';
import {UserService} from '../adminShared/user.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'./admin-menu.component.html',
    styleUrls: ['./admin-menu.component.css']
})

export class AdminMenuComponent implements OnInit{
    theUser: string;
    constructor(private userSVC: UserService, private touter: Router){ }

       ngOnInit(){
            this.theUser = this.userSVC.loggedInUser;
        }

      /*  logout(){
            thi
        }*/

}