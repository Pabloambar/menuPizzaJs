
const form = document.getElementById("form"),
      numberPizzaInput = document.getElementById("numberPizza"),  
      pizzaNombre = document.getElementById("pizza"),
      precio = document.getElementById("precio"),
      divImgPizza = document.getElementById("imgPizza");
      carta = document.getElementById("carta"),
      main = document.getElementById("cont")
      cont1 = document.getElementById("contI"),
      cont2 = document.getElementById("contII")
      botonBuscar = document.getElementById("btn__buscar"),
      botonNueva = document.getElementById("btn__nueva__pizza");
      

const pizzas = [
    {
        id: 1,
        nombre:'Palmitos',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'palmitos, salsa-golf'],
        precio: 1000,
    },

    {
        id: 2,
        nombre:'Fugazzeta',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', ' Muucha cebolla', 'salsa de tomate'],
        precio: 900,
    },

    {
        id: 3,
        nombre:'Rucula',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'Rucula'],
        precio: 800,
    },

    {
        id: 4,
        nombre:'Cuatro Quesos',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'salsa de tomate', 'mozarella', 'Queso Fontina', 'Queso gorgonzola', 'Queso Parmigiano'],
        precio: 700,
    },

    {
        id: 5,
        nombre:'Napolitana',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'Ajo', 'Perejil', 'aceite de oliva', 'tomates frescos'],
        precio: 600,
    },

    {
        id: 6,
        nombre:'Pepperoni',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'Perejil', 'aceite de oliva', 'Salami'],
        precio: 500,
           
    },

    {
        id: 7,
        nombre:'Carbonara',
        ingredientes: ['harina', 'aceite', 'sal', 'levadura', 'agua', 'cebolla', 'salsa de tomate', 'mozarella', 'Perejil', 'aceite de oliva', 'Salami'],
        precio: 1500,
           
    }

];



const pizzaSeleccionada =()=>{
    const numInp = parseInt(numberPizzaInput.value);
    const pizza = pizzas.find(pizza => pizza.id === numInp);
    if (pizza) {
        pizzaNombre.innerHTML = pizza.nombre;
        precio.innerHTML = `Precio: $ ${pizza.precio}`;
        carta.classList.add('desab');
        main.classList.add('main__2');
        cont1.classList.add('desab');
        cont2.classList.add('cont__2__h');

    } else if (numberPizzaInput.value === "") {
        carta.classList.add('desab');
        main.classList.add('main__2');
        cont2.classList.add('cont__2__h');
        pizzaNombre.innerHTML = `Ingresar numero`;
        precio.innerHTML = ``;
    } else {
        carta.classList.add('desab');
        main.classList.add('main__2');
        cont2.classList.add('cont__2__h');
        pizzaNombre.innerHTML = `Pizza inexistente`;
        precio.innerHTML = ``;
    }
};


const crearimagen = () => {
    const numInp = parseInt(numberPizzaInput.value);
    const pizza = pizzas.find(pizza => pizza.id === numInp);
    const mostrar = pizza.nombre
    const imagenPizza = document.createElement('img');
    imagenPizza.src = `./assets/imagenes/${mostrar}.jpg`;
    imagenPizza.classList.add('imgP');
    divImgPizza.append(imagenPizza);
    botonBuscar.classList.add('desab');
    botonNueva.classList.add('hab');
    numberPizzaInput.desabled = true;
    // console.log(imagenPizza);
}



botonNueva.addEventListener('click', () => {
    location.reload();
});


botonBuscar.addEventListener('click' , (e)=>{
    e.preventDefault()
    pizzaSeleccionada();
    crearimagen();
});



