const deNico = (key, m) => { 
   
 
let sor = [...key].sort().join('') // returns key alphabetically sorted as string - 'acryz'

let ord = [...key].map((x,i) => sor.indexOf(x) + 1) // returns correct order as number (data type) - [2, 3, 1, 5, 4]

let len = key.length 
      
let mp = m.split('').map((x,i) => i % len == 0 ? i : '') // returns indexes that are divisible by the key's length in the correct place on the array, otherwise returns '' - [0, "", "", "", "", 5, "", "", "", "", 10, "", "", "", "", 15, "", "", "", ""] 
            

let co =   mp.map((x,i) => typeof x == 'number' ? m.substr(x,len) : '')
            .filter(x => !x == '') // returns array of string cut at correct place (still inclduing whitespaces) - ["cseer", "ntiof", "armit", " on  "]



let cor =  co.map((x,i) => { let tp = [...x];  // returns 'let co' spread - ["c", "s", "e", "e", "r"],["n", "t", "i", "o", "f"],["a", "r", "m", "i","t"] , [" ", "o", "n", " ", " "]
                         
        let xx = tp.join(''); // returns ["cseer", "ntiof", "armit", " on  "] - though this is the same as what 'let co' returns, it has to be redeclared here as it can have the map method applied to in with 'let cor'. You are not able to link .map to itself.
                         
                         
        let wa = [...ord]; // returns [2, 3, 1, 5, 4] , [2, 3, 1, 5, 4] ,  [2, 3, 1, 5, 4] ,  [2, 3, 1, 5, 4]
                         
return wa.map((x,i) => xx.charAt(x-1)) }) // returns each array with the decoded characters in their corrrect place - ["s", "e", "c", "r", "e"] , ["t", "i", "n", "f", "o"] , ["r", "m", "a", "t", "i"] , ["o", "n", " ", " ", " "]
                        
                         
return cor.join('').replace(/,/g,'').replace(/\s+$/, '')



                         
}  