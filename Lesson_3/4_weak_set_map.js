const ws=new WeakSet();
const foo={};
const bar={};
ws.add(foo);
ws.delete(foo);
console.log(ws.has(foo));
