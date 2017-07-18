import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    templateUrl:'./filter.component.html',
    styleUrls:['./filter.component.css']
})
export class FilterComponent implements OnInit{

    constructor(private activatedRoute: ActivatedRoute){}
    ngOnInit(){
        //example -> http://localhost:8080/news?author=rafael&date=jan
        let params = this.activatedRoute.snapshot.queryParams;
        console.log(params)

      
    }
}