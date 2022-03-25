var maxProfit = function(prices) {
    let maxPrft = 0;
    let buy = prices[0];
    for(let i=1; i<prices.length; i++){
        const diff = prices[i] - buy;
        if(diff > 0){
           maxPrft += diff;
            buy = prices[i];
        } else {
            buy = Math.min(buy, prices[i]);
        }
    } 
    return maxPrft;
};

// console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));