import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import * as moment from "moment";
import * as _ from "underscore";

import { BookList } from "../../../../Classes/BookList";
import { LocalStorage } from "../../../../Libraries/LocalStorage";
import { Utility } from 'src/app/Libraries/Utility';

@Component({
  selector: "BookEntryForm",
  templateUrl: "./BookEntryForm.html"
})

export class BookEntryForm implements OnInit {

  @Input() displayForm: boolean = true;
  @Output() newBookTitleEmitter = new EventEmitter<string>();

  bookEntryForm: FormGroup;
  BookList: BookList[] = [];
  booklistToken: string = LocalStorage.BookListToken;

  constructor(private fb: FormBuilder) { this.createBookEntryForm(); }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.BookList = LocalStorage.getLocalStorageItem(this.booklistToken);
    if (Utility.isNullOrUndefined(this.BookList)) this.BookList = [];
  }

  createBookEntryForm() {
    this.bookEntryForm = this.fb.group({
      Title: ["", Validators.required],
      Author: ["", Validators.required],
      Genre: ["", Validators.required],
      Publisher: ["", Validators.required],
      PublishingYear: ["", Validators.required]
    });
  }

  entryNewBook(formValue): void {
    this.BookList.push(formValue);
    LocalStorage.setLocalStorageItem(this.booklistToken, JSON.stringify(this.BookList));
    this.createBookEntryForm();
    this.onNewEntry(formValue.Title);
  }

  onNewEntry(title: string) {
    this.newBookTitleEmitter.emit(title);
  }
}
