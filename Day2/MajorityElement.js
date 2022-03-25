var majorityElement = function(nums) {
    const eligibleLength = Math.floor(nums.length/2);
    const elCountMap = {};
    for(let i=0; i<nums.length; i++){
        if(elCountMap[nums[i]]){
           elCountMap[nums[i]] += 1;
        } else {
            elCountMap[nums[i]] = 1;
        }
    }
    let mEl;
    for(let key in elCountMap){
        if(elCountMap[key] > eligibleLength){
           return key;
         }
    }
    return false;
};

console.log(majorityElement([3,2,3]));