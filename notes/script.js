var h=document.createElement("h1")
var D=document.createElement("div")
D.appendChild(h)
document.body.append(D)




setTimeout(() => {
   document.querySelector('h1').innerText=10
    setTimeout(() => {
        document.querySelector('h1').innerText=9
        setTimeout(() => {
           document.querySelector('h1').innerText=8
           setTimeout(() => {
            document.querySelector('h1').innerText=7
            setTimeout(() => {
                document.querySelector('h1').innerText=6
                setTimeout(() => {
                    document.querySelector('h1').innerText=5
                    setTimeout(() => {
                        document.querySelector('h1').innerText=4
                        setTimeout(() => {
                            document.querySelector('h1').innerText=3
                            setTimeout(() => {
                                document.querySelector('h1').innerText=2
                                setTimeout(() => {
                                    document.querySelector('h1').innerText=1
                                    setTimeout(() => {
                                        document.querySelector('h1').innerText='Happy independence day'
                                     },1000)
                                 },1000)
                             },1000)
                         },1000)
                     },1000)
                 },1000)
             },1000)
         },1000)
        },1000)
    }, 1000)
}, 1000)