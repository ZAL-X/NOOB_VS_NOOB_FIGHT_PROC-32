class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "purple";
    this.life2 = "purple";
    this.life3 = "purple";

    World.add(world, this.body);
  }

  life() {
    push();
   //escribe el código correcto para mostrar las vidas como tres rectángulos verdes en una línea horizontal.
   textSize(20);
   fill("white");
   text("NOOB", width -940, 40);

   fill(this.life1);
   rect(width -900, 50, 70, 30);
   fill(this.life2);
   rect(width - 970, 50, 70, 30);
   fill(this.life3);
   rect(width - 1040, 50, 70, 30);
   
    pop();
    //*NOTA*: las coordenadas de la barra de salud y el nombre
    // solo estan alineadas con el tamaño regular del 100% de la pantalla.
  }

 


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
