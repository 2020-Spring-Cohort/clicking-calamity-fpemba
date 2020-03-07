describe('Clicking Calamity Tests:', () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCount();
    })
    describe('countClick() records clicks and ClickCounter can give the clickCount', () => {
        
        it('countClick() 1 time should result in a clickCount of 1.', () => {
            underTest.countClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('countClick() 2 times should result in a clickCount of 2.', () => {
            underTest.countClick();
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });
    });
    describe('Clicking Companions:', () => {
        it("ClickCounter should have 0 when new.", () => {
            expect(underTest.getCompanionCount()).toBe(0);
        });

        it("ClickCounter should have 1 after 100 clicks.",() =>{
            for(let i = 0; i<100; i++) {
                underTest.countClick() 
            }
            underTest.purchaseCompanion()
            expect(underTest.getCompanionCount()).toBe(1);
        });

        it("ClickCount should be able to purchase more clicking companions.",() =>{
            for (let i = 0; i<220; i++){
                underTest.countClick()
            }
            underTest.purchaseCompanion()
            underTest.purchaseCompanion()
            expect(underTest.getCompanionCount()).toBe(2);
         });

        it("the cost of purchase companion goes up by 10%.",() =>{
            for (let i = 0; i<100; i++){
                underTest.countClick()
            }
            underTest.purchaseCompanion()
            expect(underTest.companionCost).toBe(Math.round(100));
        
         });

         it("The cost of each Clicking Companion will go up with each purchase by 10%.",() =>{
             
            for (let i = 0; i<110; i++){
                underTest.countClick();
            } 
                underTest.purchaseCompanion()
                underTest.purchaseCompanion()
                expect(underTest.clickCount).toBe(10);
                expect(underTest.companionCost).toBe(100);
           
         })
    });
});