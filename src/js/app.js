
let autoClick = 0;
let collectiveCulminationCompounderClick = 0;
let multiplier = 1.2;
let power=0;
let companionCost=100;
let costOfCollectiveCulminationCompounder=10;
let priceMultiplier=.10;
let cookiecount =Math.pow(multiplier, power);
let value = 0;
function update() {

    document.querySelector('#cookie').value = Math.floor(cookiecount)
    document.querySelector('#cookie').innerHTML = Math.floor(cookiecount);

    document.title = Math.floor(cookiecount) + "  Cookies";

    document.getElementById('numberOfClickingCompanion').innerHTML = "You Have " + autoClick + " Clicking Companions.";

    document.getElementById('costOfClickingCompanion').innerHTML = "Cost: " + companionCost + " Cookies";

    document.getElementById('costOfCollectiveCulminationCompounder').innerHTML = "Cost: " + costOfCollectiveCulminationCompounder + " Cookies";

    document.getElementById('numberOfCollectiveCulminationCompounders').innerHTML = "You Have " + collectiveCulminationCompounderClick + " Collective Culmination Compounders.";
    document.querySelector('#cookiesPerSecond').innerHTML = Math.round((autoClick * multiplier)) + " cookies per second";

};


function timer() {
    cookiecount = cookiecount + autoClick;
    cookiecount = cookiecount + collectiveCulminationCompounderClick;
    update()
   
};
setInterval(timer, 1000)


function addCookie() {

    cookiecount+=Math.pow(multiplier, power);
    update()
};

function reset() {
    cookiecount = 0
    collectiveCulminationCompounderClick

    update()

};

function purchaseClickingCompanion() {

    if (cookiecount >= companionCost) {
        cookiecount = cookiecount - companionCost;
        autoClick = autoClick + 1;
        companionCost+=Math.floor((companionCost*.10));
        update()
    }
}

function purchaseCollectiveCulminationCompounder() {

    if (cookiecount >= costOfCollectiveCulminationCompounder) {
        cookiecount = cookiecount - costOfCollectiveCulminationCompounder;
        collectiveCulminationCompounderClick = collectiveCulminationCompounderClick + 1;
        costOfCollectiveCulminationCompounder+=Math.round(costOfCollectiveCulminationCompounder*priceMultiplier);
        power++;
        cookiecount+=value;
        priceMultiplier+=.10;
        update()

    };
}