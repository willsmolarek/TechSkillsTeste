"use strict";
// src/data.ts
// 1. String para o nome do produto
let productName = "Camiseta";
// 2. Number para o preço do produto
let productPrice = 29.99;
// 3. Boolean indicando se o produto está em estoque
let inStock = true;
// 4. Array de strings para as categorias do produto
let categories = ["Roupas", "Moda", "Feminino"];
// 5. Tupla para representar as coordenadas (latitude, longitude)
let coordinates = [40.7128, -74.0060]; // Exemplo: Coordenadas de Nova York
// 6. Enum para os status de um pedido
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pendente";
    OrderStatus["Processing"] = "Processando";
    OrderStatus["Delivered"] = "Entregue";
    OrderStatus["Canceled"] = "Cancelado";
})(OrderStatus || (OrderStatus = {}));
// Atribuindo um status de pedido
let currentOrderStatus = OrderStatus.Pending;
// Função para retornar uma mensagem formatada
function formatProductMessage(name, price) {
    return `O produto ${name} custa R$ ${price.toFixed(2)}`;
}
// Exemplo de uso da função
console.log(formatProductMessage(productName, productPrice)); // "O produto Camiseta custa R$ 29.99"
