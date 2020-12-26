class Form{
    constructor(){
        this.input=createInput("");
        this.button=createButton("play");
        this.greeting=createElement("h3");
        this.title=createElement("h3");
    }
    hide(){
        this.title.hide();
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2+150, 10);

        this.input.position(displayWidth/2-150, displayHeight/2-200);
        this.button.position(displayWidth/2+20, displayHeight/2-200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
        
            this.greeting.html("hello "+player.name);
            this.greeting.position(displayWidth/2+200, displayHeight/2-50);
        })
    }
}