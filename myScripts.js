function scrollWin() {

    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth",
      });

}

function scrollUp(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

function vanish(){
    document.getElementById('KagamiPic').style.display = 'none'
}

function vanish1(){
    document.getElementById('HinataPic').style.display = 'none'
}

function appear(){
    document.getElementById('KagamiPic').style.display = 'block'
}

function appear1(){
    document.getElementById('HinataPic').style.display = 'block'
}