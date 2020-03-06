let cookiecount = 0;
let autoClick = 0;
let collectiveCulminationCompounderClick = 0;
let multiplier = 1.2;

function update() {

    document.getElementById('cookie').value = Math.floor(cookiecount)

    document.title = Math.floor(cookiecount) + "  Cookies";

    document.getElementById('numberOfClickingCompanion').innerHTML = "You own " + autoClick + " Clicking Companion.";

    document.getElementById('costOfClickingCompanion').innerHTML = "Cost: " + ((autoClick + 1) * 20) + " Cookies";

    document.getElementById('numberOfCollectiveCulminationCompounders').innerHTML = "You own " + collectiveCulminationCompounderClick +
        " Collective Culmination Compounder";

    document.getElementById('costOfCollectiveCulminationCompounder').innerHTML = "Cost: " + ((collectiveCulminationCompounderClick + 1) * 10) + " Cookies";

    document.getElementById('amountOfCCCMultiplier').innerHTML = "Multipler update x" + ((multiplier + 1.2));

    document.getElementById('amountOfCCCMultiplier2').innerHTML =  "x" + ((multiplier + 1.2) * 50);;

    document.getElementById('costOfCCCMulipler').innerHTML = "Cost: " + ((multiplier + 1.2) * 50) + "Cookies";

    document.getElementById('currentMuliplier').innerHTML = "Your current multipler is x " + (((multiplier + 1.2) * 50));
 

};


function timer() {
    cookiecount = cookiecount + autoClick * multiplier;
    cookiecount = cookiecount + collectiveCulminationCompounderClick * multiplier;
    update()

};
setInterval(timer, 1000)


function addCookie() {

    cookiecount++
    update()
};



function reset() {
    cookiecount = 0
    document.getElementById('cookie').innerHTML = Math.floor(cookiecount);
    update()

};

function purchaseClickingCompanion() {

    if (cookiecount >= (autoClick + 1) * 20) {
        cookiecount = cookiecount - ((autoClick + 1) * 20);
        autoClick = autoClick + 1;
        update()
    }
}

function purchaseCollectiveCulminationCompounder() {

    if (cookiecount >= ((collectiveCulminationCompounderClick + 1) * 10)) {
        cookiecount = cookiecount - ((collectiveCulminationCompounderClick + 1) * 10);
        collectiveCulminationCompounderClick = collectiveCulminationCompounderClick + 1
        update()

        document.getElementById("CCButton").style.color="red";

    };

    function buyCCCMultiplier(){
        if (cookiecount >= ((multiplier + 1.2)* 50)) {
            cookiecount = cookiecount - ((multiplier + 1.2) * 50);
            multiplier++;
            update()
        }
    }

    function companyHeader(){
        let popup = document.getElementById("companyPopup");
        popup.classList.toggle("show");
    }
}