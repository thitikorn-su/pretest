import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CollectionListComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
