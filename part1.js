let a = false;
let b = true;
let c = 0;
let d = 1;
let e = "0";
let f = "000";
let g = "1";
let h = NaN;
let i = Infinity;
let j = -Infinity;
let k = "";
let l = "20";
let m = "Twenty";
let n = null;
let o = undefined;

console.log(Number(a)); //0
console.log(String(a)); //false
console.log(Boolean(a)); //false

console.log(Number(b)); //1
console.log(String(b)); //true
console.log(Boolean(b)); //true

console.log(Number(c)); //0
console.log(String(c)); //0
console.log(Boolean(c)); //false

console.log(Number(d)); //1
console.log(String(d)); //1
console.log(Boolean(d)); //true

console.log(Number(e)); //0
console.log(String(e)); //0
console.log(Boolean(e)); //true

console.log(Number(f)); //0
console.log(String(f)); //000
console.log(Boolean(f)); //true

console.log(Number(g)); //1
console.log(String(g)); //1
console.log(Boolean(g)); //true

console.log(Number(h)); //NaN
console.log(String(h)); //NaN
console.log(Boolean(h)); //false

console.log(Number(i)); //Infinity
console.log(String(i)); //Infinity
console.log(Boolean(i)); //true

console.log(Number(j)); //-Infinity
console.log(String(j)); //-Infinity
console.log(Boolean(j)); //true