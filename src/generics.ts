// src/generics.ts

// 1. Função genérica getData<T> que retorna o mesmo array
function getData<T>(items: T[]): T[] {
    return items;
}

// Testando a função getData com diferentes tipos
const stringArray = ["Apple", "Banana", "Cherry"];
const numberArray = [1, 2, 3, 4, 5];
const userArray = [
  { id: 1, name: "João Silva", email: "joao@email.com", isActive: true },
  { id: 2, name: "Maria Souza", email: "maria@email.com", isActive: false },
];

// Chamando getData com diferentes tipos
console.log(getData(stringArray));  // Saída esperada: ["Apple", "Banana", "Cherry"]
console.log(getData(numberArray));  // Saída esperada: [1, 2, 3, 4, 5]
console.log(getData(userArray));    // Saída esperada: [{ id: 1, name: "João Silva", ... }, { id: 2, name: "Maria Souza", ... }]

// 2. Função genérica getById<T extends { id: number }> que procura um objeto por ID
function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

// Testando a função getById com arrays de IUser e IProduct

interface IUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  categories: string[];
}

const users: IUser[] = [
  { id: 1, name: "João Silva", email: "joao@email.com", isActive: true },
  { id: 2, name: "Maria Souza", email: "maria@email.com", isActive: false },
];

const products: IProduct[] = [
  { id: 101, name: "Smartphone", price: 2999.99, inStock: true, categories: ["Eletrônicos", "Tecnologia"] },
  { id: 102, name: "Laptop", price: 4999.99, inStock: true, categories: ["Eletrônicos", "Computadores"] },
];

// Chamando getById com diferentes tipos
console.log(getById(users, 1));   // Saída esperada: { id: 1, name: "João Silva", email: "joao@email.com", isActive: true }
console.log(getById(products, 102)); // Saída esperada: { id: 102, name: "Laptop", price: 4999.99, ... }
console.log(getById(users, 3));   // Saída esperada: undefined (pois não existe um usuário com id 3)
