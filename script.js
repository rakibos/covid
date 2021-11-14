const counters = document.querySelectorAll('#counter')

for(let n of counters) {
    const updateCount = () => {
      const target = +n.getAttribute('value');
      const count = +n.innerText;console.log(count);
      const speed = 900; // change animation speed here
      const inc = target / speed; 
      if(count < target) {
        n.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        n.innerText = target;
      }
      
    }
    updateCount();
  }
/*   console.log(counters)
 */





/* val = counter.getAttribute('value')
var up = 0;
if (up != val) {
    setInterval(() => {
        up += 1;
        counter.innerText=up
    }, 100);
} else {
    clearInterval
}

console.log(counter.value)
console.log(val) */