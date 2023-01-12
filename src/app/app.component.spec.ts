import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent,CollectionListComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'My sample of Merge and Sort Collection | Pre-test'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        const expected = "My sample of Merge and Sort Collection | Pre-test";
        expect(app.pageTitle).toEqual('My sample of Merge and Sort Collection');
    });

    it('should render h1 title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const expected = "My sample of Merge and Sort Collection";
        expect(compiled.querySelector('h1')?.textContent).toEqual(expected);
    });
});
