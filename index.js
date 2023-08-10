let buffer = []
let max = 7
let timer = Object()
timer.consumer = 0
timer.producer = 0
function produce(time) {
timer.producer =  setInterval(function () {
    console.log("producing");
    buffer = document.getElementById('buffer')
    let producer = document.getElementById('producer')
    if(buffer.children.length==max){
        producer.style.backgroundColor="goldenrod"

    }
    else{
        producer.style.backgroundColor="rgb(191, 255, 64)"
        let job = document.createElement('div')
        job.className = "item"
        job.animationName ="produce"
        buffer.firstElementChild? buffer.firstElementChild.before(job):buffer.appendChild(job)
    }
        },time)
}
function consume(time) {
 timer.consumer = setInterval(function () {
    console.log("consuming");
    console.log(buffer);
    buffer = document.getElementById('buffer')
        if((buffer.childElementCount>0)&& (buffer.lastElementChild)){
            let consumer = document.getElementById('consumer')
            consumer.style.backgroundColor="rgb(191, 255, 64)"
            job = buffer.lastElementChild;
            job.style.animationName = "consume"
            job.style.animationDuration = (time/1000)+"s"
            
            setTimeout(() => {
                if(buffer.childElementCount>0){
                    buffer.removeChild(buffer.lastElementChild)
                }
            }, 2000);

        }
        else{
            document.getElementById('consumer').style.backgroundColor="goldenrod"
        }
    },time,timer)
}
document.getElementById('start').addEventListener('click',function () {
if(this.innerText == "Start"){
    let ct = parseFloat(document.getElementById('consumerTime').value);
    let pt = parseFloat(document.getElementById('producerTime').value);
    if((ct < 0)|| (pt<0) || (ct>20) || (pt>20)){
        alert("time cannot be less than 0 and greater than 20")
    }
    else{
        this.innerText = "Stop";
        this.style.backgroundColor = "red"
        consume(ct*1000)
        produce(pt*1000)

    }
}
else{
    clearInterval(timer.consumer)
    clearInterval(timer.producer)
    this.innerText = "Start";
    this.style.backgroundColor="blue"
}
})