
//https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties

function whatNumberIsIt(n){
  switch (true) {
    case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
    case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
    case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
    case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
    case (isNaN(n)): return "Input number is Number.NaN";
    default: return "Input number is " + n;
  }
    
    
    
    
 //https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript 
    
  const giveMeFive = obj => {
  const result = []

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key.length === 5) result.push(key)
      if (obj[key].length === 5) result.push(obj[key])
    }
  }

  return result
}  
    
  
  //https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
  
  function buildFun(n){
	var res = []
	for (let i = 0; i< n; i++){
		res.push(function(){
			return i
		})
	}
	return res
}
    
    
    //https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
    
    
    

