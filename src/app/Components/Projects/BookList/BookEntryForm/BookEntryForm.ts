import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import * as moment from "moment";
import * as _ from "underscore";

import { BookList } from "../../../../Classes/BookList";

@Component({
  selector: "BookEntryForm",
  templateUrl: "./BookEntryForm.html"
})
export class BookEntryForm implements OnInit {

  bookEntryForm: FormGroup;
  // bookEntryForm: BookList;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createBookEntryForm();
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

  entryNewBook(formValue) : void{
      console.log(formValue, JSON.stringify(formValue));
  }
}
