class Form {
    constructor(){
      this.input=createInput("name");
      this.button=createButton('play');
      this.greeting=createElement('h2');

    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
    display(){
    var title= createElement('h2')
    title.html("CAR RACING GAME");
    title.Position(130,0);
    var input =createInput("name")
    input.position(130,160);
    var button =createButton ("play");
    button.position(250,200);
    var greeting =createElement('h3');
    button.mousePressed (function(){
      input.hide();
      button.hide();  
      var name =input.value();
      playerCount=playerCount+1;
      player.update(name);
      player.updateCount(playerCount);
      greeting.html("hello"+name);
      greeting.position(130,60);


    })
    }
}