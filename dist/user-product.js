"use strict";
// src/user-product.ts
// 5. Criando instâncias de IUser, IProduct e IAdminUser
const user = {
    id: 1,
    name: "João Silva",
    email: "joao.silva@email.com",
    isActive: true,
};
const product = {
    id: 101,
    name: "Smartphone",
    price: 2999.99,
    inStock: true,
    categories: ["Eletrônicos", "Tecnologia", "Celulares"],
};
const adminUser = {
    id: 2,
    name: "Maria Souza",
    email: "maria.souza@email.com",
    isActive: true,
    role: "admin",
};
// 6. Função para imprimir as informações de um usuário
function printUserInfo(user) {
    console.log(`Usuário: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Status: ${user.isActive ? "Ativo" : "Inativo"}`);
    console.log(`ID: ${user.id}`);
}
// 7. Função para imprimir as informações de um produto
function printProductInfo(product) {
    console.log(`Produto: ${product.name}`);
    console.log(`Preço: R$ ${product.price.toFixed(2)}`);
    console.log(`Em estoque: ${product.inStock ? "Sim" : "Não"}`);
    console.log(`Categorias: ${product.categories.join(", ")}`);
}
// 8. Imprimindo as informações
printUserInfo(user);
printProductInfo(product);
printUserInfo(adminUser); // Como a interface IAdminUser herda IUser, podemos passar adminUser para printUserInfo
