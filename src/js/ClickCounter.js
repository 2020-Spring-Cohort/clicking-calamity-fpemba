class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
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
}