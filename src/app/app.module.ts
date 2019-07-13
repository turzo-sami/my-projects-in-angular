import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { NotFound } from './Components/NotFound/NotFound';

import { VocabHelper } from './Components/Projects/VocabHelper/VocabHelper';

// Booklist
import { BookList } from './Components/Projects/BookList/BookList';
import { DisplayBookList } from './Components/Projects/BookList/DisplayBookList/DisplayBookList';
import { BookEntryForm } from './Components/Projects/BookList/BookEntryForm/BookEntryForm';


// Services
import { MasterService } from './Services/master.service';

// Pipes
import { FilterPipe } from './Pipes/Filter.pipe';
import { RemoveZeroPipe } from './Pipes/RemoveZero.pipe';
import { RoundNumberPipe } from './Pipes/RoundNumber.pipe';
import { SortPipe } from './Pipes/Sort.pipe';
import { ChangeStatusPipe } from './Pipes/ChangeStatus.pipe';
import { ShortNamePipe } from './Pipes/ShortName.pipe';
import { DoubleDigit } from './Pipes/DoubleDigit.pipe';
import { AmountInWords } from './Pipes/AmountInWords.pipe';
import { NumberToRoman } from './Pipes/NumberToRoman.pipe';



@NgModule({
  declarations:[
      AppComponent,

      // Components
      Home, Navbar, NotFound, VocabHelper,

      BookList, DisplayBookList, BookEntryForm,

      // Pipes
      FilterPipe, RemoveZeroPipe, RoundNumberPipe, SortPipe, ChangeStatusPipe, ShortNamePipe, AmountInWords, DoubleDigit, NumberToRoman
  ],

  imports:[
      BrowserModule,
      AppRoutingModule,
      HttpClientModule, 
      ReactiveFormsModule, 
      FormsModule    
  ],

  providers:[
      // Services
      MasterService,
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
