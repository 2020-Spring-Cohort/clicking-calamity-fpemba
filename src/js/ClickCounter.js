class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
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
}