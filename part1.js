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

console.log(Number(k)); //0
console.log(String(k));
console.log(Boolean(k)); //false

console.log(Number(l)); //20
console.log(String(l)); //20
console.log(Boolean(l)); //true

console.log(Number(m)); //NaN
console.log(String(m)); //Twenty
console.log(Boolean(m)); //true

console.log(Number(n)); //0
console.log(String(n)); //null
console.log(Boolean(n)); //false

console.log(Number(o)); //NaN
console.log(String(o)); //undefined
console.log(Boolean(o)); //false
