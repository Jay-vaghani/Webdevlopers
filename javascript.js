

const counters = document.querySelectorAll(".counter")

function runCounters(){
    counters.forEach(function(element){
        element.innerHTML = 0;

        let target = +element.dataset.count;

        let equlcount = target / 200

        let countIt = function(){
            let displayCount = +element.innerHTML;
            if(displayCount < target){
                element.innerHTML = Math.ceil(displayCount + equlcount)
                setTimeout(countIt , 5)
            }
            else{
                element.innerHTML = target
            }
        }
        countIt()
    })
}

runCounters()

let countsection = document.querySelector(".countingSection")

let done = 0;

const sectionObserver = new IntersectionObserver(function(enteries){
    if(enteries[0].isIntersecting && done !== 1){
        done = 1
        runCounters()
    }
})

sectionObserver.observe(countsection)

/*----------------------------------------Project Section End----------------------------------------*/



/*----------------------------------------Client Review Section End----------------------------------------*/

