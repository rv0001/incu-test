function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/; // Default delimiters
  
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(\[.*?\]+|.)\n/);
      if (delimiterMatch) {
        let rawDelimiters = delimiterMatch[1];
  
        // Handle multiple delimiters in square brackets
        if (rawDelimiters.startsWith("[")) {
          const escapedDelimiters = rawDelimiters
            .match(/\[.*?\]/g)
            .map(d => d.slice(1, -1).replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'))
            .join("|"); // Join multiple delimiters with OR `|`
          delimiter = new RegExp(escapedDelimiters);
        } else {
          delimiter = new RegExp(rawDelimiters.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
        }
  
        numbers = numbers.split("\n")[1]; // Remove delimiter declaration
      }
    }
  
   
    const nums = numbers.split(delimiter).map(Number).filter(num => num <= 1000);
  
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };
  