function add(numbers) {
    if (!numbers) return 0;
  
    const sanitizedNumbers = numbers.replace(/\n/g, ",");
    const nums = sanitizedNumbers.split(",").map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };
  