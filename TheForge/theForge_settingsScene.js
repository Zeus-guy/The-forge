"use strict";

//Escena del menú de ajustes
var sc_menuAjustes = new Phaser.Scene('MenuAjustes');

sc_menuAjustes.preload = function() {
    //Cambiar este fondo cuando esté subido el final
    this.load.image('fondo', 'assets/sky.png');
    //Botones de la interfaz
    this.load.image('botonTecla', 'assets/botonTecla.png');
    this.load.image('botonSalir', 'assets/botonSalir.png');
    this.load.image('botonRestablecer', 'assets/botonRestablecer.png');
    this.load.image('botonAplicar', 'assets/botonAplicar.png');
    this.load.image('icono menos', 'assets/icono menos.png');
    this.load.image('icono mas', 'assets/icono mas.png');
}

sc_menuAjustes.create = function() {
    //Añadimos el fondo
    sc_menuAjustes.fondo = sc_menuAjustes.add.image(400, 300, 'fondo');

    //Añadimos todas las teclas
    //jugador 1
    sc_menuAjustes.bp1i2 = this.physics.add.sprite(100, 100, 'botonTecla');
    sc_menuAjustes.bp1i2.setInteractive();
    sc_menuAjustes.bp1i2.text = sc_menuAjustes.add.text(100, 100, getTecla(cont.p1.i2), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp1i2.on('pointerup', function() {clickTecla(cont.p1.i2, sc_menuAjustes.bp1i2.text, 0);});

    sc_menuAjustes.bp1w = this.physics.add.sprite(200, 100, 'botonTecla');
    sc_menuAjustes.bp1w.setInteractive();
    sc_menuAjustes.bp1w.text = sc_menuAjustes.add.text(200, 100, getTecla(cont.p1.w), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp1w.on('pointerup', function() {clickTecla(cont.p1.w, sc_menuAjustes.bp1w.text, 1);});

    sc_menuAjustes.bp1i1 = this.physics.add.sprite(300, 100, 'botonTecla');
    sc_menuAjustes.bp1i1.setInteractive();
    sc_menuAjustes.bp1i1.text = sc_menuAjustes.add.text(300, 100, getTecla(cont.p1.i1), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp1i1.on('pointerup', function() {clickTecla(cont.p1.i1, sc_menuAjustes.bp1i1.text, 2);});

    sc_menuAjustes.bp1a = this.physics.add.sprite(100, 200, 'botonTecla');
    sc_menuAjustes.bp1a.setInteractive();
    sc_menuAjustes.bp1a.text = sc_menuAjustes.add.text(100, 200, getTecla(cont.p1.a), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp1a.on('pointerup', function() {clickTecla(cont.p1.a, sc_menuAjustes.bp1a.text, 3);});

    sc_menuAjustes.bp1s = this.physics.add.sprite(200, 200, 'botonTecla');
    sc_menuAjustes.bp1s.setInteractive();
    sc_menuAjustes.bp1s.text = sc_menuAjustes.add.text(200, 200, getTecla(cont.p1.s), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp1s.on('pointerup', function() {clickTecla(cont.p1.s, sc_menuAjustes.bp1s.text, 4);});

    sc_menuAjustes.bp1d = this.physics.add.sprite(300, 200, 'botonTecla');
    sc_menuAjustes.bp1d.setInteractive();
    sc_menuAjustes.bp1d.text = sc_menuAjustes.add.text(300, 200, getTecla(cont.p1.d), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp1d.on('pointerup', function() {clickTecla(cont.p1.d, sc_menuAjustes.bp1d.text, 5);});

    //jugador 2
    sc_menuAjustes.bp2i2 = this.physics.add.sprite(700, 100, 'botonTecla');
    sc_menuAjustes.bp2i2.setInteractive();
    sc_menuAjustes.bp2i2.text = sc_menuAjustes.add.text(700, 100, getTecla(cont.p2.i1), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp2i2.on('pointerup', function() {clickTecla(cont.p2.i1, sc_menuAjustes.bp2i1.text, 6);});

    sc_menuAjustes.bp2w = this.physics.add.sprite(600, 100, 'botonTecla');
    sc_menuAjustes.bp2w.setInteractive();
    sc_menuAjustes.bp2w.text = sc_menuAjustes.add.text(600, 100, getTecla(cont.p2.w), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp2w.on('pointerup', function() {clickTecla(cont.p2.w, sc_menuAjustes.bp2w.text, 7);});

    sc_menuAjustes.bp2i1 = this.physics.add.sprite(500, 100, 'botonTecla');
    sc_menuAjustes.bp2i1.setInteractive();
    sc_menuAjustes.bp2i1.text = sc_menuAjustes.add.text(500, 100, getTecla(cont.p2.i2), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp2i1.on('pointerup', function() {clickTecla(cont.p2.i2, sc_menuAjustes.bp2i2.text, 8);});

    sc_menuAjustes.bp2d = this.physics.add.sprite(700, 200, 'botonTecla');
    sc_menuAjustes.bp2d.setInteractive();
    sc_menuAjustes.bp2d.text = sc_menuAjustes.add.text(700, 200, getTecla(cont.p2.d), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp2d.on('pointerup', function() {clickTecla(cont.p2.d, sc_menuAjustes.bp2d.text, 9);});

    sc_menuAjustes.bp2s = this.physics.add.sprite(600, 200, 'botonTecla');
    sc_menuAjustes.bp2s.setInteractive();
    sc_menuAjustes.bp2s.text = sc_menuAjustes.add.text(600, 200, getTecla(cont.p2.s), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp2s.on('pointerup', function() {clickTecla(cont.p2.s, sc_menuAjustes.bp2s.text, 10);});

    sc_menuAjustes.bp2a = this.physics.add.sprite(500, 200, 'botonTecla');
    sc_menuAjustes.bp2a.setInteractive();
    sc_menuAjustes.bp2a.text = sc_menuAjustes.add.text(500, 200, getTecla(cont.p2.a), {fontSize: '50px', fontFamily: 'Bookman', color: '#000000'}).setOrigin(0.5, 0.5);
    sc_menuAjustes.bp2a.on('pointerup', function() {clickTecla(cont.p2.a, sc_menuAjustes.bp2a.text, 11);});

    //Botón salir
    //Al pulsarlo, se vuelve a la escena anterior
    sc_menuAjustes.botonSalir = this.physics.add.sprite(100, 500, 'botonSalir');
    sc_menuAjustes.botonSalir.setInteractive();
    var that = this;
    sc_menuAjustes.botonSalir.on('pointerup', function() { that.scene.start("MenuPrincipal");});

    //Botón restablecer
    //Al pulsarlo, se vuelve a llamar a guardarTeclas
    sc_menuAjustes.botonRestablecer = this.physics.add.sprite(300, 500, 'botonRestablecer');
    sc_menuAjustes.botonRestablecer.setInteractive();
    sc_menuAjustes.botonRestablecer.on('pointerup', function() { guardarTeclas();});

    //Botón aplicar
    //Al pulsarlo, se llama a confirmarTeclas (guarda lo del array a las teclas de verdad)
    sc_menuAjustes.botonAplicar = this.physics.add.sprite(500, 500, 'botonAplicar');
    sc_menuAjustes.botonAplicar.setInteractive();
    sc_menuAjustes.botonAplicar.on('pointerup', function() { confirmarTeclas();});

    //Botones +- (música)
    //Al pulsarlos, se cambia tanto mus_vol como los volumenes de todas las músicas

    //Botones +- (efectos de sonido)
    //Lo mismo pero para los sonidos

    //Guardar todas las teclas en un array (funcion guardarTeclas)
    sc_menuAjustes.teclas = [];
    guardarTeclas();

    sc_menuAjustes.puedeCambiar = false;
    sc_menuAjustes.teclaACambiar = 0;
}

sc_menuAjustes.update = function() {
    this.input.keyboard.on('keydown', 
    function (event) { 
        if (sc_menuAjustes.puedeCambiar) {
            sc_menuAjustes.teclas[sc_menuAjustes.teclaACambiar] = event.keyCode;
            sc_menuAjustes.textoACambiar.setText(getTecla(event.keyCode));
            sc_menuAjustes.puedeCambiar = false;
        }
        //console.log(event.keyCode);
    });
}

function clickTecla(tecla, text, id) {
    //console.log(getTecla(tecla) + ", keyCode " + tecla);
    //dejar de dibujar la letra
    text.setText("");
    //activar variable de aceptar inputs de letra
    sc_menuAjustes.puedeCambiar = true;
    sc_menuAjustes.teclaACambiar = id;
    sc_menuAjustes.textoACambiar = text;
}

function getTecla(tecla) {
    //Si la tecla es una de las flechas devuelve un caracter especial, si es una letra devuelve la letra
    switch(tecla) {
        case 37:
            return '←';
        case 38:
            return '↑';
        case 39:
            return '→';
        case 40:
            return '↓';
    }
    return String.fromCharCode(tecla);
}

function guardarTeclas() {
    sc_menuAjustes.teclas[0] = cont.p1.i2;
    sc_menuAjustes.teclas[1] = cont.p1.w;
    sc_menuAjustes.teclas[2] = cont.p1.i1;
    sc_menuAjustes.teclas[3] = cont.p1.a;
    sc_menuAjustes.teclas[4] = cont.p1.s;
    sc_menuAjustes.teclas[5] = cont.p1.d;
    sc_menuAjustes.teclas[6] = cont.p2.i1;
    sc_menuAjustes.teclas[7] = cont.p2.w;
    sc_menuAjustes.teclas[8] = cont.p2.i2;
    sc_menuAjustes.teclas[9] = cont.p2.d;
    sc_menuAjustes.teclas[10] = cont.p2.s;
    sc_menuAjustes.teclas[11] = cont.p2.a;

    sc_menuAjustes.bp1i2.text.setText(getTecla(cont.p1.i2));

    sc_menuAjustes.bp1w.text.setText(getTecla(cont.p1.w));

    sc_menuAjustes.bp1i1.text.setText(getTecla(cont.p1.i1));

    sc_menuAjustes.bp1a.text.setText(getTecla(cont.p1.a));

    sc_menuAjustes.bp1s.text.setText(getTecla(cont.p1.s));

    sc_menuAjustes.bp1d.text.setText(getTecla(cont.p1.d));

    sc_menuAjustes.bp2i2.text.setText(getTecla(cont.p2.i1));

    sc_menuAjustes.bp2w.text.setText(getTecla(cont.p2.w));

    sc_menuAjustes.bp2i1.text.setText(getTecla(cont.p2.i2));

    sc_menuAjustes.bp2d.text.setText(getTecla(cont.p2.d));

    sc_menuAjustes.bp2s.text.setText(getTecla(cont.p2.s));

    sc_menuAjustes.bp2a.text.setText(getTecla(cont.p2.a));

}

function confirmarTeclas() {
    cont.p1.i2 = sc_menuAjustes.teclas[0];
    cont.p1.w = sc_menuAjustes.teclas[1];
    cont.p1.i1 = sc_menuAjustes.teclas[2];
    cont.p1.a = sc_menuAjustes.teclas[3];
    cont.p1.s = sc_menuAjustes.teclas[4];
    cont.p1.d = sc_menuAjustes.teclas[5];
    cont.p2.i1 = sc_menuAjustes.teclas[6];
    cont.p2.w = sc_menuAjustes.teclas[7];
    cont.p2.i2 = sc_menuAjustes.teclas[8];
    cont.p2.d = sc_menuAjustes.teclas[9];
    cont.p2.s = sc_menuAjustes.teclas[10];
    cont.p2.a = sc_menuAjustes.teclas[11];

    sc_menuAjustes.bp1i2.text.setText(getTecla(cont.p1.i2));

    sc_menuAjustes.bp1w.text.setText(getTecla(cont.p1.w));

    sc_menuAjustes.bp1i1.text.setText(getTecla(cont.p1.i1));

    sc_menuAjustes.bp1a.text.setText(getTecla(cont.p1.a));

    sc_menuAjustes.bp1s.text.setText(getTecla(cont.p1.s));

    sc_menuAjustes.bp1d.text.setText(getTecla(cont.p1.d));

    sc_menuAjustes.bp2i2.text.setText(getTecla(cont.p2.i1));

    sc_menuAjustes.bp2w.text.setText(getTecla(cont.p2.w));

    sc_menuAjustes.bp2i1.text.setText(getTecla(cont.p2.i2));

    sc_menuAjustes.bp2d.text.setText(getTecla(cont.p2.d));

    sc_menuAjustes.bp2s.text.setText(getTecla(cont.p2.s));

    sc_menuAjustes.bp2a.text.setText(getTecla(cont.p2.a));

}