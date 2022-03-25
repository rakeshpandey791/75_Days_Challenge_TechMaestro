var pivotIndex = function(nums) {
    let pIndex = -1;
    let leftSum = 0;
    let rightSum = 0;
    let lIndex = -1;
    
    for(let i=1; i<nums.length; i++){
        rightSum = 0;
        lIndex = i;
        for(let j=i; j<nums.length; j++){
            rightSum += nums[j];
        }
        if(leftSum === rightSum){
            pIndex = i -1;
            break;
        } else {
            leftSum += nums[i-1];
        }
    }
    if(leftSum === rightSum && lIndex === nums.length - 1){
        pIndex = nums.length - 1;
    }
    return pIndex;
};

// console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
// console.log(pivotIndex([2,1,-1]));
// console.log(pivotIndex([-1,-1,0,1,1,0]));

