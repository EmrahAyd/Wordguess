import {tdk} from './data.js';

let kelime = tdk[Math.floor(Math.random() * 100000 % 5533) + 1]
///// NEXT İNPUT./////
var container = document.getElementsByClassName("container")[0];
container.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}


///enterla fonksyonu çalıştırma.
var input = document.getElementById("1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   keyup1()
  }
});
var input = document.getElementById("2");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   keyup2()
  }
});
var input = document.getElementById("3");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   keyup3()
  }
});
var input = document.getElementById("4");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   keyup4()
  }
});
var input = document.getElementById("5");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   keyup5()
  }
});
/////


let deneme1;
///////////////////////
////Kelime///


let a1 = document.getElementById("1.1")
let a2 = document.getElementById("1.2")
let a3 = document.getElementById("1.3")
let a4 = document.getElementById("1.4")
let a = document.getElementById("1")

let b1 = document.getElementById("2.1")
let b2 = document.getElementById("2.2")
let b3 = document.getElementById("2.3")
let b4 = document.getElementById("2.4")
let b = document.getElementById("2")

let c1 = document.getElementById("3.1")
let c2 = document.getElementById("3.2")
let c3 = document.getElementById("3.3")
let c4 = document.getElementById("3.4")
let c = document.getElementById("3")

let d1 = document.getElementById("4.1")
let d2 = document.getElementById("4.2")
let d3 = document.getElementById("4.3")
let d4 = document.getElementById("4.4")
let d = document.getElementById("4")

let e1 = document.getElementById("5.1")
let e2 = document.getElementById("5.2")
let e3 = document.getElementById("5.3")
let e4 = document.getElementById("5.4")
let e = document.getElementById("5")

//// kilitleme


///////////////1
function keyup1(){

    i=0;

    deneme1 = [a1.value,a2.value,a3.value,a4.value,a.value]

    var sonuc = tdk.indexOf(deneme1.join(''))
    if(sonuc>=0) {
                                                            a1.disabled = true;
                                                            a2.disabled = true;
                                                            a3.disabled = true;
                                                            a4.disabled = true;
                                                            a.disabled = true;


    function controler(harfi){            
                 
            if ( harfi.value == kelime[i]){
                harfi.classList.add("yesil")  
                console.log("yeşil oldu" + i+harfi.value)            
            }

                else if(harfi.value == kelime[ (i + 1) % 7] || harfi.value == kelime[(i + 2) % 7] || harfi.value == kelime[(i + 3) % 7] || harfi.value == kelime[(i + 4) % 7]){            
                    harfi.classList.remove("yesil")    
                    harfi.classList.add("sari")
                    console.log("sarı oldu" + i+harfi.value)
                }

        else {
        harfi.classList.add("gri")
        console.log("gri oldu" + i+ harfi.value)
        }
      
    i++;
    }
   


    setTimeout(controler, 100, a1);
    setTimeout(controler, 800, a2);
    setTimeout(controler, 1500, a3);
    setTimeout(controler, 2200, a4);
    setTimeout(controler, 2900, a);

          
    }
        else{ document.getElementById("birinci").classList.add("bounceIn")
        function regeri(){
            document.getElementById("birinci").classList.remove("bounceIn")
        }
        setInterval(regeri,3000)
           }
        }

//////////// 2
        function keyup2(){

            i=0;
        
            deneme1 = [b1.value,b2.value,b3.value,b4.value,b.value]
        
            var sonuc = tdk.indexOf(deneme1.join(''))
            if(sonuc>=0) {
                                                                    b1.disabled = true;
                                                                    b2.disabled = true;
                                                                    b3.disabled = true;
                                                                    b4.disabled = true;
                                                                    b.disabled = true;
        
        
            function controler(harfi){            
                         
                    if ( harfi.value == kelime[i]){
                        harfi.classList.add("yesil")  
                        console.log("yeşil oldu " + i+harfi.value)            
                    }
        
                        else if(harfi.value == kelime[ (i + 1) % 7] || harfi.value == kelime[(i + 2) % 7] || harfi.value == kelime[(i + 3) % 7] || harfi.value == kelime[(i + 4) % 7]){            
                            harfi.classList.remove("yesil")    
                            harfi.classList.add("sari")
                            console.log("sarı oldu" + i+harfi.value)
                        }
        
                else {
                harfi.classList.add("gri")
                console.log("gri oldu " + i+ harfi.value)
                }
              
            i++;
            }
           
        
        
            setTimeout(controler, 100, b1);
            setTimeout(controler, 800, b2);
            setTimeout(controler, 1500, b3);
            setTimeout(controler, 2200, b4);
            setTimeout(controler, 2900, b);
        
                  
            }
                else{ document.getElementById("ikinci").classList.add("bounceIn")
                function regeri(){
                    document.getElementById("ikinci").classList.remove("bounceIn")
                }
                setInterval(regeri,3000)
                   }
                }
        ////////////// 3       
       
        function keyup3(){

                            i=0;
                        
                            deneme1 = [c1.value,c2.value,c3.value,c4.value,c.value]
                        
                            var sonuc = tdk.indexOf(deneme1.join(''))
                            if(sonuc>=0) {
                                                                                    c1.disabled = true;
                                                                                    c2.disabled = true;
                                                                                    c3.disabled = true;
                                                                                    c4.disabled = true;
                                                                                    c.disabled = true;
                        
                        
                            function controler(harfi){            
                                         
                                    if ( harfi.value == kelime[i]){
                                        harfi.classList.add("yesil")  
                                        console.log("yeşil oldu" + i+harfi.value)            
                                    }
                        
                                        else if(harfi.value == kelime[ (i + 1) % 7] || harfi.value == kelime[(i + 2) % 7] || harfi.value == kelime[(i + 3) % 7] || harfi.value == kelime[(i + 4) % 7]){            
                                            harfi.classList.remove("yesil")    
                                            harfi.classList.add("sari")
                                            console.log("sarı oldu" + i+harfi.value)
                                        }
                        
                                else {
                                harfi.classList.add("gri")
                                console.log("gri oldu" + i+ harfi.value)
                                }
                              
                            i++;
                            }
                           
                        
                        
                            setTimeout(controler, 100, c1);
                            setTimeout(controler, 800, c2);
                            setTimeout(controler, 1500, c3);
                            setTimeout(controler, 2200, c4);
                            setTimeout(controler, 2900, c);
                        
                                  
                            }
                                else{ document.getElementById("ucuncu").classList.add("bounceIn")
                                function regeri(){
                                    document.getElementById("ucuncu").classList.remove("bounceIn")
                                }
                                setInterval(regeri,3000)
                                   }
                                }
        ///////////4
        function keyup4(){

                                    i=0;
                                
                                    deneme1 = [d1.value,d2.value,d3.value,d4.value,d.value]
                                
                                    var sonuc = tdk.indexOf(deneme1.join(''))
                                    if(sonuc>=0) {
                                                                                            d1.disabled = true;
                                                                                            d2.disabled = true;
                                                                                            d3.disabled = true;
                                                                                            d4.disabled = true;
                                                                                            d.disabled = true;
                                
                                
                                    function controler(harfi){            
                                                 
                                            if ( harfi.value == kelime[i]){
                                                harfi.classList.add("yesil")  
                                                console.log("yeşil oldu" + i+harfi.value)            
                                            }
                                
                                                else if(harfi.value == kelime[ (i + 1) % 7] || harfi.value == kelime[(i + 2) % 7] || harfi.value == kelime[(i + 3) % 7] || harfi.value == kelime[(i + 4) % 7]){            
                                                    harfi.classList.remove("yesil")    
                                                    harfi.classList.add("sari")
                                                    console.log("sarı oldu" + i+harfi.value)
                                                }
                                
                                        else {
                                        harfi.classList.add("gri")
                                        console.log("gri oldu" + i+ harfi.value)
                                        }
                                      
                                    i++;
                                    }
                                   
                                
                                
                                    setTimeout(controler, 100, d1);
                                    setTimeout(controler, 800, d2);
                                    setTimeout(controler, 1500, d3);
                                    setTimeout(controler, 2200, d4);
                                    setTimeout(controler, 2900, d);
                                
                                          
                                    }
                                        else{ document.getElementById("dorduncu").classList.add("bounceIn")
                                        function regeri(){
                                            document.getElementById("dorduncu").classList.remove("bounceIn")
                                        }
                                        setInterval(regeri,3000)
                                           }
                                        }
                    ///////////////////5
                function keyup5(){

                                            i=0;
                                        
                                            deneme1 = [e1.value,e2.value,e3.value,e4.value,e.value]
                                        
                                            var sonuc = tdk.indexOf(deneme1.join(''))
                                            if(sonuc>=0) {
                                                                                                    e1.disabled = true;
                                                                                                    e2.disabled = true;
                                                                                                    e3.disabled = true;
                                                                                                    e4.disabled = true;
                                                                                                    e.disabled = true;
                                        
                                        
                                            function controler(harfi){            
                                                         
                                                    if ( harfi.value == kelime[i]){
                                                        harfi.classList.add("yesil")  
                                                        console.log("yeşil oldu" + i+harfi.value)            
                                                    }
                                        
                                                        else if(harfi.value == kelime[ (i + 1) % 7] || harfi.value == kelime[(i + 2) % 7] || harfi.value == kelime[(i + 3) % 7] || harfi.value == kelime[(i + 4) % 7]){            
                                                            harfi.classList.remove("yesil")    
                                                            harfi.classList.add("sari")
                                                            console.log("sarı oldu" + i+harfi.value)
                                                        }
                                        
                                                else {
                                                harfi.classList.add("gri")
                                                console.log("gri oldu" + i+ harfi.value)
                                                }
                                              
                                            i++;
                                            }
                                           
                                        
                                        
                                            setTimeout(controler, 100, e1);
                                            setTimeout(controler, 800, e2);
                                            setTimeout(controler, 1500, e3);
                                            setTimeout(controler, 2200, e4);
                                            setTimeout(controler, 2900, e);
                                        
                                                  
                                            }
                                                else{ document.getElementById("besinci").classList.add("bounceIn")
                                                function regeri(){
                                                    document.getElementById("ikinci").classList.remove("bounceIn")
                                                }
                                                setInterval(regeri,3000)
                                                   }
                                                }
                                                
                                                
