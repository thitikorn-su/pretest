import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionListComponent } from './collection-list.component';

describe('CollectionListComponent', () => {
    let component: CollectionListComponent;
    let fixture: ComponentFixture<CollectionListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ CollectionListComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(CollectionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('testing doMerge function with normal collection',    () => {
        const expectedResult: number[] = [1,2,3,4,6,6,15,50,52,60];
        expect(component.doMerge([1,2,4,6,15,52],[3,6,50,60])).toEqual(expectedResult);
    });

    it('testing doMerge function with collection contain decimal',    () => {
        const expectedResult: number[] = [1,5.5,6.5,6.6,6.9,7,8.1];
        expect(component.doMerge([5.5,6.6,8.1],[1,6.5,6.9,7])).toEqual(expectedResult);
    });

    it('testing doMerge function with collection contain zero',    () => {
        const expectedResult: number[] = [0,0,1,1,1,2,2,2,2];
        expect(component.doMerge([0,2,2,2],[0,1,1,1,2])).toEqual(expectedResult);
    });
});
