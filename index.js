const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log(pizzas);

console.log("----------------------------------------------------------");
console.log("a) Las pizzas que tengan un id impar");
console.log("----------------------------------------------------------");

//EJERCICIO A: Las pizzas que tengan un id impar.

pizzas.forEach((pizza) => {
  if (pizza.id % 2 === 1) {
    console.log(pizza);
  }
});

const pizzasIdImpar = pizzas.filter((pizza) => pizza.id % 2 === 1);

console.log(pizzasIdImpar);

console.log("----------------------------------------------------------");
console.log("b) ¿Hay alguna pizza que valga menos de $600?");
console.log("----------------------------------------------------------");

//EJERCICIO B: ¿Hay alguna pizza que valga menos de $600?

const pizzaPrecio = pizzas.filter((pizza) => pizza.precio <= 600);

console.log(pizzaPrecio);

console.log("----------------------------------------------------------");
console.log("c) El nombre de cada pizza con su respectivo precio");
console.log("----------------------------------------------------------");

//EJECICIO C: El nombre de cada pizza con su respectivo precio.

pizzas.forEach((nombres) => {
  console.log(`La ${nombres.nombre} cuesta ${nombres.precio} $ pesos`);
});

console.log("----------------------------------------------------------");
console.log("d) Todos los ingredientes de cada pizza");
console.log("----------------------------------------------------------");

//EJERCICIO D: Todos los ingredientes de cada pizza

pizzas.forEach((receta) => {
  console.log(
    `Los ingredientes de la ${receta.nombre} son: ${receta.ingredientes.join(
      ", "
    )}`
  );
});
