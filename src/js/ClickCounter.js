class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
        this.collectiveCompounderCount = 0;
        this.costOfCollectiveCulminationCompounder =10;
        this.value=0;
    }
    countClick() {
        this.clickCount++;
    }
    getCompanionCount(){
        return 0;
    }
    getCompanionCount(){
        return this.companionCount;
    }

    purchaseCompanion(){
        if(this.clickCount >= 100){
            this.clickCount -= 100;
            this.companionCount++;
        }
 
    }
    companionCost(){
        if (clickcount >= companionCost) {
            clickcount = clickcount - companionCost;
            companionCost+=Math.floor((companionCost*.10));
        }
    }

    getCollectiveCompounderCount(){
        return this.collectiveCompounderCount;
    }
 

    purchaseCollectiveCulminationCompounder(){
        if(this.clickCount >= 10){
            this.clickCount -=10;
            this.collectiveCompounderCount++;
        }
    }
}