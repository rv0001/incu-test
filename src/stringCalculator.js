function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/;
  
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(\[.*?\]|.)\n/);
      if (delimiterMatch) {
        const rawDelimiter = delimiterMatch[1];
        
    
        if (rawDelimiter.startsWith("[")) {
          const escapedDelimiter = rawDelimiter.slice(1, -1).replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
          delimiter = new RegExp(escapedDelimiter);
        } else {
          delimiter = new RegExp(rawDelimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
        }
  
        numbers = numbers.split("\n")[1];
      }
    }
  
    const nums = numbers.split(delimiter).map(Number);
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };
  