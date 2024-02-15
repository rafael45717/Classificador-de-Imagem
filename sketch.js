let MobileNet;
let pinguim;

function imagemPronta(){
    image(pinguim, 0, 0, width, height);
}

function modeloPronto(){
    console.log("O modelo está pronto!");
    mobilenet.predict(pinguim, obterResultados);
}

function obterResultados(error, resultados){
    if(error){
        console.error(error);
    }else{
        console.log (resultados);

    }
}


function setup(){
    createCanvas(600,400);
    background(0);
    mobilenet=ml5.imageClassifier('MobileNet', modeloPronto);
    pinguim = createImg("imagens/pinguim.jpeg", imagemPronta);
    pinguim.hide();
    background(0);
}


