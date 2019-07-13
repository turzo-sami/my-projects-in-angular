import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import * as _ from 'underscore';

@Component({
    selector: 'VocabHelper',
    templateUrl: './VocabHelper.html'
})

export class VocabHelper implements OnInit {

    searchText: string = "";
    selectedOption: string = "Meaning";
    
    constructor() { }

    ngOnInit() {

        this.loadVocabData();

    }

    loadVocabData(){
        console.log(this.selectedOption);
    }

}