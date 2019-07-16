import { Component, OnInit} from '@angular/core';

import * as moment from 'moment';
import * as _ from 'underscore';

@Component({
    selector: 'BookList',
    templateUrl: './BookList.html'
})

export class BookList implements OnInit {

    bookTitle: string = "";

    constructor() { }

    ngOnInit() {
    }


    setNewBookTitle(e){
        this.bookTitle = e;
    }

}