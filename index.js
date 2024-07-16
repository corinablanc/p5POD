// TP FINAL CORINA BLANC Y CANDELARIA VICTORICA - POD 2024

//creacion de variables necesarias
let estado // variable para seguir los estados de la interaccion (primera instancia, segunda instancia, tercera instancia). Cada instancia tiene su estado con sus interacciones propias. En otras palabras, las interacciones de un estado no funcionan en otro. 
let fondo // variable imagen de fondo inicial
let icono //icono de infromacion adicional

//variables para efecto de sonido
let sonidoTalar //talar
let sonidoSuelo // degradacion de suelo
let sonidoAnimal //  extincion de animales


//variables para calcular distancia
let lejos // entre el boton info adicional y el mouse
let lejos_X // entre el boton de cierre info adicional (pop up) y el mouse

//variables colores
let verde //variable para guardar el color de proceso
let rojo //variable para guardar el color de los botones


//creacion de listas vacias para "contar" las veces que se presiona una tecla
let x = [] //lista para llevar registro de "x"
let d = [] //lista  para llevar registro de "d"
let e = [] //lista  para llevar registro de "e"

//creacion de listas para la cargada de imagenes
let talarFrames = ["Tala 1.jpg", "Tala 2.jpg", "Tala 3.jpg", "Tala 4.jpg"]
let sueloFrames = ["Deg 1.jpg", "Deg 2.jpg", "Deg 3.jpg", "Deg 4.jpg"]
let animalFrames = ["Extinción 1.jpg", "Extinción 2.jpg", "Extinción 3.jpg", "Extinción 4.jpg"]

//creacion de listas donde las imagenes son cargadas
let talar = []
let suelo = []
let animal = []

function preload() {
    fondo = loadImage("IMAGENES/INTRO.jpg") // cargada de la imagen de fondo
    icono = loadImage("IMAGENES/Icono info.png") //cargada de la imagen de icono
    tipobold = loadFont("Fonts/RobotoMono-Bold.ttf") //cargada de tipografía display
    tipomedium = loadFont("Fonts/RobotoMono-Medium.ttf") //cargada de tipografía texto

    //cargada de las imagenes de cada estado/accion
    for (let index = 0; index < talarFrames.length; index++) {

        talar[index] = loadImage('IMAGENES/' + talarFrames[index])
        suelo[index] = loadImage('IMAGENES/' + sueloFrames[index])
        animal[index] = loadImage('IMAGENES/' + animalFrames[index])

    }

    // cargada de los efectos de sonido
    sonidoTalar = loadSound('SONIDOS/Tala.mp3')
    sonidoSuelo = loadSound('SONIDOS/Suelo.mp3')
    sonidoAnimal = loadSound('SONIDOS/Animal.mp3')
}


function setup() {
    createCanvas(windowWidth, windowHeight) // se crea el canvas segun el tamaño de la ventana
    background(fondo) // fondo

    //color
    verde = color(200, 255, 5)
    rojo = color(234, 101, 70)


    //barrita de proceso
    fill(50)
    noStroke()
    //altura en base a width asi esta en relacion a los botones (que sea la mitad)
    rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final

}

function draw() {
    estado = 1// inicial

    /*
    // revisar si funciona las listas como queremos
    console.log("X" + x)
    console.log("D" + d)
    console.log("E" + e)
    */

    // console.log(estado) //revisamos que los estados cambien como deseamos

    // llamada a la funcion de cambio de estado para inhabilitar o habilitar teclas segun el momento
    cambioEstado(x)
    cambioEstado(d)
    cambioEstado(e)


    //llamada a la funcion del boton, lo hicimos en una funcion porque lo unico que cambia en los cuadrados (botones) es la posicion en X, es decir, por cuánto se divide la pantalla. Se lo llama dentro de condicionales porque cada boton "se activa" en diferentes estados y lo queremos demostrar con un cambio de color

    //TALA DE ARBOLES
    if (estado == 1) {
        //boton X activado
        noStroke()
        fill(50)
        miBoton(4)
        miBoton(33 / 5)
        fill(rojo) // color distinto para el qeu esat activado
        miBoton(20)
        
        //nombre tecla
        textFont(tipomedium) 
        textSize(width / 20) //correspondiente al width del boton y consecuentemnte a la pantalla
        fill(50)
        text("X", width / 17, (82 + width/23)) //posicion del texto en rlaicon a las coordenadas del boton, y como consecuencia a las de la pantalla 

        //título TALA DE ARBOLES
        textFont(tipobold)
        textSize(width/20) //tamaño en relacion a la pantalla
        fill(240)
        strokeWeight(2)
        stroke(50)
        text("Tala", width/20, height* 0.74) 

        
        //rect de fondo
        fill(50)
        rect(width/20, height*3/4, width/2.3, width/10) 

        // texto párrafo
        textFont(tipomedium)
        textSize(width/63)
        fill(240)
        
        text("La cobertura forestal mundial disminuyó del 31,9 % del año 2000 al 31,2 % en 2020. La expansión agrícola es el motor directo de casi el 90 % de la deforestación mundial.", width/16, height*0.76,  width/2.3, width/10)

    }
    // DEGRADACION DEL SUELO
    else if (estado == 2) {
        //boton D activado
        fill(50)
        noStroke()
        miBoton(4)
        miBoton(20)
        fill(rojo) // color distinto para el qeu esat activado
        miBoton(33 / 5)
        //nombre tecla
        textFont(tipomedium)
        textSize(width/20)
        fill(50)
        text("D", width*5/31, (82+width/23)) 

        //título DEGRADAICION SUELO
        textFont(tipobold)
        textSize(width/20)
        fill(240)
        strokeWeight(2)
        stroke(50)
        text("Degradación del suelo", width/20,  height* 0.74)

        //párrafo Extinción

        //rect de fondo
        fill(50)
        rect(width/20, height*0.78, width/2.3, width/10) 

        // texto párrafo
        textFont(tipomedium)
        textSize(width/63)
        fill(240)
        text("100 millones de hectáreas de tierras sanas y productivas se degradaron cada año entre 2015 y 2019 (equivale al doble del tamaño de Groenlandia)", width/16, height*0.79,  width/2.5, width/10)

    }
    // EXTINCION ANIMALES
    if (estado == 3) {
        //boton E activado
        noStroke()
        fill(rojo) //color distinto
        miBoton(4)
        fill(50)
        miBoton(20)
        miBoton(33 / 5)
        //nombre tecla
        textFont(tipomedium)
        textSize(width/20)
        fill(50)
        text("E", width/3.84, (82+width/23)) 

        //título EXTINCION ACELERADA
        textFont(tipobold)
        textSize(width/20)
        fill(240)
        strokeWeight(2)
        stroke(50)
        text("Extinción acelerada", width/20, height*0.74) 

        //párrafo Extinción

        //rect de fondo
        fill(50)
        rect(width/20, height*3/4, width/2.3, width/10) 

        // texto párrafo
        textFont(tipomedium)
        textSize(width/63)
        fill(240)
        text("La degradación de los suelos provoca la extinción de especies, el mayor evento de extinción desde la desaparición de los dinosaurios.", width/16, height*0.76, width/2.3, width/10)
    }

    //FINAL - NO BOTONES --> ICONO DE INFORMACION ADICIONAL
    else if (estado == 4) {
        fill(180)
        noStroke()
        ellipse(width * 9 / 10, 100, windowWidth / 20) // fondo de color para el fondo
        imageMode(CENTER)
        image(icono, width * 9 / 10, 100, windowWidth / 20, windowWidth / 20) // imagen del icono
    }

    lejos = dist(width * 9 / 10, 100, mouseX, mouseY) // calculamos distancia entre el mouse y el icono de inforamicon adicional
    lejos_X = dist(mouseX, mouseY, width*0.73, height/3.6) // calculamos distancia entre el mouse y el boton X de cierre del pop up de info adicional

}

function keyPressed() {
    // condicionales donde no solo se tiene que llamar una tecla especifica, si no que tambien hay que estar en un estado especifico del interactivo

    //TALA DE ARBOLES
    if (key == 'x' && estado == 1) {
        background(talar[x.length]) // llamada a una imagen de fondo segun la cantidad de veces que se presionó la tecla (si es la primera vez, se llama a la imagen inicial 0, despues a la 1 y asi)

        x.push('x') // lista que "cuenta" cada vez que se presiona la tecla. Sirve para el background (qeu va por pasos, por veces que tocas se agregan cosas) y para el cambio de estado despues de determinadas veces que se presiona,  para asi, inhabilitar esta tecla y habilitar la siguiente

        //parametros sonido
        sonidoTalar.play() // reproducir el efecto de sonido
        sonidoTalar.setVolume(0.5) // volumen real
        sonidoTalar.rate(1.5) // velocidad un poco acelerada


        //barrita de proceso rellenandose

        if (x.length == 1) { // nivel 1
            noStroke()
            fill(50)
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final

            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
        }

        else if (x.length == 2) { // nivel 2
            noStroke()

            fill(50)
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final

            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
        }

        else if (x.length == 3) { // nivel 3
            noStroke()
            fill(50)
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final
            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
        }

        else if (x.length == 4) { // nivel 4
            noStroke()
            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final
        }

    }

    //DEGRADACION DE SUELO
    else if (key == 'd' && estado == 2) {
        background(suelo[d.length])  // llamada a una imagen de fondo segun la cantidad de veces que se presionó la tecla
        d.push('d') // lista que "cuenta" cada vez que se presiona la tecla

        //parametros sonido
        sonidoSuelo.play() // reproducir el efecto de sonido
        sonidoSuelo.setVolume(0.5) // volumen real
        sonidoSuelo.rate(2) // velocidad acelerada


        //barrita de proceso rellenandose
        if (d.length == 1) { //nivel 1
            noStroke()
            fill(50)
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final

            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
        }

        else if (d.length == 2) { //nivel2
            noStroke()
            fill(50)
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final

            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
        }

        else if (d.length == 3) { // nivel3
            noStroke()
            fill(50)
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final
            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
        }

        else if (d.length == 4) { //nivel 4
            noStroke()
            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final
        }

    }

    //EXTINCION DE ANIMAL
    else if (key == 'e' && estado == 3) { 
        background(animal[e.length]) // llamada a una imagen de fondo segun la cantidad de veces que se presionó la tecla
        e.push('e') // lista que "cuenta" cada vez que se presiona la tecla


        //parametros sonido
        sonidoAnimal.play() // reproducir el efecto de sonido
        sonidoAnimal.setVolume(0.5) // volumen real
        sonidoAnimal.rate(2) // velocidad acelerada



        //barrita de proceso rellenandose
        if (e.length == 1) { // nivel 1
            noStroke()
            fill(50)
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final

            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
        }

        else if (e.length == 2) { // nivel 2
            noStroke()
            fill(50)
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final

            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
        }

        else if (e.length == 3) { // nivel3
            noStroke()
            fill(50)
            rect(width * 2 / 3, 110, width * 5 / 16, width / 40) //rectangulo estado final
            fill(verde)
            rect(width * 2 / 3, 110, (width / 3.2) / 4, width / 40) //rectangulo primero
            rect(width * 2 / 3, 110, (width / 3.2) / 2, width / 40) //rectangulo segundo
            rect(width * 2 / 3, 110, (width / 3.2) * 3 / 4, width / 40) //rectangulo tercero
        }

        // en etse ultimo no existe nivel 4 porque ahi es cuando aparece el icono de infroamcion adicional

    }

}

//FUNCION PARA CAMBIAR EL ESTADO UNA VEZ QUE SE PRESIONA LA TECLA DESEADA 3 VECES --> lo hacemos en base a una vez que las listas de las teclas lleguen a la cantidad de elementos que deseamos (cantidad de veces que hacemos click)
function cambioEstado(l) {
    if (l.length > 3) { // queremos que caad tecla se presione 4 veces maximo, despues cambia de estado y se inhabilita
        estado++
    }
}

//FUNCION PARA CREAR UN BOTON EN BASE A LA POSICION EN X (CON RESPECTO A LA PANTALLA), recive los parametros por los cuales se divide la pantalla
function miBoton(a) {
    //prueba posicion botones X D E
    rect(width / a, 82, width / 20)
}

//HACER CLICK EN EL BOTON / ICONO DE INFORMACIÓN y cierre del pop up
function mousePressed() {
    if (lejos < windowWidth / 40) {
        //rectangulo oscuro contenedor de la infromacion
        fill(50)
        stroke(50)
        strokeWeight(8)
        strokeJoin(ROUND)
        rect(windowWidth / 4, windowHeight / 4, windowWidth * 2 / 4, windowHeight / 2)
    
        //título PROBLEMA
        textFont(tipobold)
        textSize(width/40);
        fill(240);
        strokeWeight(2)
        stroke(50);
        text("El problema:", windowWidth / 3.9,height/3) 
        
        // texto párrafo PROBLEMA
        textFont(tipomedium)
        textSize(width/100)
        fill(240)
        text("La pérdida de bosques, degradación de los suelos y extinción de especies son grandes amenazas para las personas y el planeta.Los bosques cubren casi el 31 % de la superficie de nuestro planeta y albergan más del 80% de todas las especies terrestres de animales, plantas e insectos. El deterioro de la biodiversidad se está produciendo a un ritmo más rápido ahora que en cualquier otro momento de la historia de la humanidad. Un cambio fundamental en la humanidad y su relación con la naturaleza es esencial.", width / 3.9, height/2.8, width * 2 / 4.1, height / 2) 
    
        //título PREGUNTA
        textFont(tipobold)
        textSize(width/40);
        fill(240);
        strokeWeight(2)
        stroke(50);
        text("¿Qué podemos hacer?", width/3.9, height/1.7) 
    
        // texto párrafo RESPUESTA
        textFont(tipomedium)
        textSize(width/100)
        fill(240)
        text("Nuestro accionar con el cuidado del medioambiente es clave para revertir o desacelerar estos problemas. Podemos reciclar, seguir una dieta basada en productos locales de origen sostenible, respetar la flora y fauna para evitar perturbarla, y proteger y apoyar el cuidado de las áreas naturales protegidas de nuestras localidades.", width/3.9, height/1.65, width*2/4.1, height/2) 
       
        //bton X de cierre
        fill(180)
        stroke(255)
        strokeWeight(2)
        ellipse(width*0.73, height/3.6, width/60) // circulo del boton
        textFont(tipobold)
        textSize(width/120)
        fill(255)
        text("X", width*0.7275, height/3.53) // X sobre el boton
    
        stroke(255) //dejamos este stroke asi el icono i queda con borde blanco

    }

    if(lejos_X<width/60){
        image(animal[3], width/2, height/2, width, height) // imagen final de todo degradado y aniamles mjuertos para que la audiencia se quede reflexionando 
    }

}








/*
PRUEBA CODIGO ENTERO PARA CAMBIAR DE ESTADO
 if (talar.length > 3) {
    estado++
    }
if (suelo.length > 3) {
    estado++
    }
if (animal.length > 3) {
     estado++
    }




//prueba posicion botones X D E
rectMode(CENTER)
rect(width/4, 100, width / 15)
rect(width/33/5, 100, width / 15)
rect(width/20, 100, width / 15) 
    */