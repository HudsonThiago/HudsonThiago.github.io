window.addEventListener("load", addEvents);

function addEvents(){
    let selectedHexI = document.getElementById("selected-hex-i");
    let label = document.getElementById("label");
    document.getElementById("hex1").addEventListener("click",function(){
        selectedHexI.className = 'fas fa-music';
        label.innerText = "Música";
        setDisplay();
        document.getElementById("c1").style.display = "block";

    });
    document.getElementById("hex2").addEventListener("click",function(){
        selectedHexI.className = 'fas fa-palette';
        label.innerText = "Artes";
        setDisplay();
        document.getElementById("c2").style.display = "block";

    });  
    document.getElementById("hex3").addEventListener("click",function(){
        selectedHexI.className = 'fas fa-paw';
        label.innerText = "Pets";
        setDisplay();
        document.getElementById("c3").style.display = "block";

    }); 
    document.getElementById("hex4").addEventListener("click",function(){
        selectedHexI.className = 'fas fa-gamepad';
        label.innerText = "Games";
        setDisplay();
        document.getElementById("c4").style.display = "block";

    }); 
    document.getElementById("hex5").addEventListener("click",function(){
        selectedHexI.className = 'fas fa-code';
        label.innerText = "Programação e projeto";
        setDisplay();
        document.getElementById("c5").style.display = "block";

    }); 

    function setDisplay(){
        document.getElementById("c1").style.display = "none";
        document.getElementById("c2").style.display = "none";
        document.getElementById("c3").style.display = "none";
        document.getElementById("c4").style.display = "none";
        document.getElementById("c5").style.display = "none";
    }
    var imgs=[];
    var slider;
    var imgAtual;
    var maxImg;
    var tmp;

    function reload(){
        var s = 1;
        for(var i = 0; i < 12; i++){
            imgs[i] = new Image();
            imgs[i].src = "images/print"+ s +".png";
            s++;
        }
    }

    function loadImg(img) {
        slider.style.backgroundImage="url('"+imgs[img].src+"')";
    }

    function start(){
        reload();
        imgAtual=0;
        maxImg=imgs.length-1;
        slider = document.getElementById("slider");
        loadImg(imgAtual);
        tmp=setInterval(switchImg,3000);
    }

    function switchImg(){
        imgAtual++
        if(imgAtual>maxImg){
            imgAtual=0
        }
        loadImg(imgAtual);
    }

    start();

}

