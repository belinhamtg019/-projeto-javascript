let campoIdade;
let campoFantasia;
let campoAventura

function setup() {
  createCanvas(800, 400);
  creatElement("h2","recomendador de filmes ");
  creatspan("sua idade:");
  campoIdade =createInput("5");
  campoFantasia =createcheckbox("gosta de fantasia?");
  campoAventura =createcheckbox("gosta de aventura?");
  }

function draw( ){
  background(220);
  let idade = campoIdade.value();
  let gostaDefantasia =campoFantasia.checked();
  let gostaDeAventura = campoaventura.checked();
  let recomendacao=geraRecomendacao(idade,gostaDefantasia,gostaDeaventura);

  fill(color(76,0,115));
  textAling(center,center);
  textSide(38);
  text(recomendacao.width/2,height/2);
  
  
}

function geraRecomendacao(idade,gostaDefantasia,gostaDeaventura){
  if(idade>=10){
    if(idade>=14){
      return"o menino que descobriu o vento";
    }else{
      if(idade>=12){
        if(gostaDeFantasia ||gostaDeAventura){
          return"homem aranha:no aranhaverso"; 
        }else{
          return"ladrões de bicicleta";
    
        }
          }else{
            if(gostaDeFantasia){
              return"As aventuras de pi";
            }else{
              return"depois da chuva";
            }
          }
        }
      }else{
        if(gostadefantasia){
          return"a viagem de chihiro";
        }else{
          return"o feitiço do tempo";
        }
      }
    }
