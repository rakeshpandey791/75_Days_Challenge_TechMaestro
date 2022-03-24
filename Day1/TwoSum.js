var twoSum = function(nums, target) {
    const diffMap = {};
    for(let i=0; i<nums.length; i++){
        const diff = target - nums[i];
        if(diffMap[diff] || diffMap[diff] === 0){
           return [diffMap[diff], i];
        } else {
            diffMap[nums[i]] = i;
        }
    }
};

console.log(twoSum([2,7,11,15], 9));