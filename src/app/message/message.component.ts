import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl:'./message.component.html'
})
export class MessageComponent{

    message:string;
    constructor(){
        this.message = "Hello";
        console.log(this.message);
    }   

}