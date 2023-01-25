//Task 1
function delay(ms) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(), ms)
  })
}
delay(3000).then(() => alert('выполнилось через 3 секунды'));

//Task 2
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
//Output: 1

//Task 3
//NO, because catch is for "reject" and then is for "resolve"