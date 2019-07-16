import { Component, OnInit, OnChanges, Input  } from '@angular/core';

import * as moment from 'moment';
import * as _ from 'underscore';

import { BookList } from "../../../../Classes/BookList";
import { LocalStorage } from "../../../../Libraries/LocalStorage";

@Component({
    selector: 'DisplayBookList',
    templateUrl: './DisplayBookList.html',
})

export class DisplayBookList implements OnInit,OnChanges {

    @Input() BookTitle: string = "";

    BookList: BookList[] = [];
    booklistToken: string = LocalStorage.BookListToken;

    constructor() { }

    ngOnInit(){
        this.getBookList();
    }

    ngOnChanges() {
        this.getBookList();
    }

    getBookList(){
        this.BookList = LocalStorage.getLocalStorageItem(this.booklistToken);
    }

}