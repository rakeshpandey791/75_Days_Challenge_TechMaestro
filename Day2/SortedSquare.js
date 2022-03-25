var sortedSquares = function(nums) {
    nums = nums.map(num => num * num);
    nums = nums.sort((a,b)=> a-b);
    return nums;
};

console.log(sortedSquares([-4,-1,0,3,10]));