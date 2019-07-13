import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import * as _ from 'underscore';

import { BookList } from "../../../../Classes/BookList";
import { LocalStorage } from "../../../../Libraries/LocalStorage";

@Component({
    selector: 'DisplayBookList',
    templateUrl: './DisplayBookList.html'
})

export class DisplayBookList implements OnInit {

    BookList: BookList[] = [];
    booklistToken: string = LocalStorage.BookListToken;

    constructor() { }

    ngOnInit() {
        this.getBookList();
    }

    getBookList(){
        this.BookList = LocalStorage.getLocalStorageItem(this.booklistToken);
    }

    displayNewBook(e){
        console.log(e);
        this.getBookList();
    }
}