import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    pageTitle = 'My sample of Merge and Sort Collection';

    constructor(private titleService: Title,) {}

    ngOnInit() {
      this.titleService.setTitle(this.pageTitle + " | Pre-test");
    }
}
