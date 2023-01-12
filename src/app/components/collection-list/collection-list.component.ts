import { Component, OnInit } from '@angular/core';
import { MergeService } from '../../services/merge.service';
@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
    collectionA: number[] = [1,3,111];
    collectionB: number[] = [0,7,109,110];
    result: number[] = [];

    constructor(private mergeService: MergeService) {}

    ngOnInit() {
        this.result = this.mergeService.merge(this.collectionA,this.collectionB);
    }

    doMerge(collectionA:number[],collectionB:number[]){
        return this.mergeService.merge(collectionA,collectionB);
    }
}
