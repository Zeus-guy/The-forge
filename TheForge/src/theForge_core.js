"use strict";

//Configuración de Phaser
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [sc_Preloader, sc_menuPrincipal, sc_Creditos, sc_Guia, sc_Next,  sc_menuAjustes, sc_SeleccionPersonaje, sc_juegoLocal] //Importante meter todas las escenas aquí
};


var game = new Phaser.Game(config);