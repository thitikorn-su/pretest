import { Injectable } from '@angular/core';


interface MergeInterface {
    merge(collection_1:number [], collection_2:number []) : number [];
}

@Injectable({
  providedIn: 'root'
})


export class MergeService implements MergeInterface {
    /**
    * merge and sort
    * @prams firstCollection ;number[]
             secondCollection ;number[]
    * @return number[]
    **/
    public merge(firstCollection:number [], secondCollection:number []) {
        var mergedCollection = [ ...firstCollection, ...secondCollection];
        return this.sortCollection(mergedCollection);
    }

    /**
    * sort by Merge Sort algorithm
    * @pram collection ;number[]
    * @return number[]
    **/
    private sortCollection(collection: number[]): number[] {
        var mergeCollection: Function = (leftCollection: number[], rightCollection: number[], tempCollection: number[]) => {
            //if has no collection to compare
            if (rightCollection === undefined) {
                return tempCollection;
            }
            //prepare to merge.
            var tempMerged = []
            var leftNumber : number
            var rightNumber: number;

            //console.log(leftCollection)
            //console.log(rightCollection)
            while (leftCollection.length > 0 && rightCollection.length > 0) {
                leftNumber  = leftCollection[0]
                rightNumber = rightCollection[0];
                //console.log(leftNumber + " < " + rightNumber);
                // compare leftNumber and rightNumber.
                // and then remove the first element from leftCollection/rightCollection and push that element into tempMerged.
                if (leftNumber < rightNumber) {
                    tempMerged.push(leftCollection.shift());
                } else {
                    tempMerged.push(rightCollection.shift());
                }
                /*console.log(tempMerged);
                console.log(rightCollection);*/
            }
            // if leftCollection/rightCollection has no more to loop
            // then merge the opposite into tempMerged
            if (leftCollection.length === 0) {
                tempMerged = tempMerged.concat(rightCollection);
            } else if (rightCollection.length === 0) {
                tempMerged = tempMerged.concat(leftCollection);
            }
            /*console.log("last:");
            console.log(tempMerged);*/
            return tempMerged;

        },splitCollection: Function = (collection: number[]): number[] => {
            // if inside of collection has only one data no need to split.
            if (collection.length === 1) {
                return collection;
            }

            var leftCollection     : number[];
            var rightCollection    : number[];
            var middle             : number = collection.length / 2;//get a middle of collection.

            // split collection to left and right
            leftCollection  = splitCollection(collection.slice(0, middle));
            rightCollection = splitCollection(collection.slice(middle, collection.length));
            return mergeCollection(leftCollection,rightCollection,collection);
        };

        return splitCollection(collection);
    }


}
