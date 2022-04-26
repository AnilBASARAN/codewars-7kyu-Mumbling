function accum(s) {
  
    let sArray = s.split('')
    result = []
    let b = 0
   for(let i = 0 ; i < sArray.length ; i++){
     b = sArray[i].toUpperCase()+sArray[i].toLowerCase().repeat(i).trim()
     result.push(b)
     
     
   } 
    return result.join('-')
    // your code
  }



/*

7kyu Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript