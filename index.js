let buffer = []
let max = 5
function produce() {
    for(i=0;i<max;i++){
       setTimeout(function () {
        let job = document.createElement('div')
        job.className = "item"
        job.animationName ="produce"
        buffer.push(job)
        document.getElementById('buffer').appendChild(job)
         },1000)
    }
}
function consume() {
    while(buffer.length>0){
       job = buffer.shift();
       job.style.animationName = "consume"
       document.getElementById('buffer').remove(job)
    }
}
produce()
setTimeout(function () {
consume()
},5000)