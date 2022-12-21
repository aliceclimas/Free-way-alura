


//códigodo carro

//carro 1
let xCarro=600;
let yCarro=40;
let velocidadeCarro=2;

//carro 2
let xCarro2=600;
let yCarro2=96;
let velocidadeCarro2=3;

//carro 3
let xCarro3=600;
let yCarro3=150;
let velocidadeCarro3=2.5;

function mostraCarro(){
  image(imagemCarro,xCarro,yCarro,50,40)
  image(imagemCarro2,xCarro2,yCarro2,50,40)
  image(imagemCarro3,xCarro3,yCarro3,50,40)
}
 function movimentaCarro(){
   xCarro-=2;
   xCarro2 -=3;
   xCarro3 -=2.5;
   
 }
 function voltaPosicaoInicialDoCarro(){
   if (xCarro<-50){
     xCarro=600
   }
   if (xCarro2<-50){
     xCarro2=600
   }
   if  (xCarro3<-50){
     xCarro3=600
   }
 }
 