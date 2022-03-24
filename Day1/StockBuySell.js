// var maxProfit = function(prices) {
//     let maxPrft = 0;
//     for(let i=0; i<prices.length; i++){
//         const cDayPrice = prices[i];
//         let maxDiff = 0;
//         for(let j=i+1; j<prices.length; j++){
//             const diff = prices[j] - cDayPrice;
//             if(maxDiff < diff){
//                 maxDiff = diff;
//             }
//         }
//         if(maxPrft < maxDiff){
//             maxPrft = maxDiff;
//         }
//     }
//     return maxPrft;
// };

var maxProfit = function(prices) {
    let maxPrft = 0;
    let buy = prices[0];
    for(let i=1; i<prices.length; i++){
        const diff = prices[i] - buy;
        buy = Math.min(buy, prices[i]);
        maxPrft = Math.max(diff, maxPrft);
    }
    return maxPrft;
};

console.log(maxProfit([7,1,5,3,6,4]));