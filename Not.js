//Objetivo:Mudar imagem grande pela de miniatura. para isso quando o mouse passar em cima acionar a funcition

//Definir a imagem em miniatura como "imagem" na function
function mudarImagem(imagem) {

    //Ver e definir a class="imagemGrande" como uma variavel 
    var imagemGrande = document.getElementById('imagem-Grande');
    
    //Mudar o src da imagem grande para o que o mouse esta em cima
    imagemGrande.src = imagem;
}
//imagenGrande = variavel ; .src = src da imagem grande ; imagem = imagem que a function ativou 
