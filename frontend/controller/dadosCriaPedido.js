var criaPedidoModulo = angular.module('criaPedidoModulo', []);

criaPedidoModulo.controller('criaPedidoController', function ($scope) {  
  $scope.clientes = [
		{codigo: 1, nome: 'Darth Vader'},
		{codigo: 2, nome: 'Obi-Wan Kenobi'},
		{codigo: 3, nome: 'Luke Skywalker'},
    {codigo: 4, nome: 'Imperador Palpatine'},
    {codigo: 5, nome: 'Han Solo'}
	];
  
  $scope.produtos = [
		{codigo: 1, nome: 'Millenium Falcon', preco: '550.000,00', multiplo: '1'},
		{codigo: 2, nome: 'X-Wing', preco: '60.000,00', multiplo: '2'},
		{codigo: 3, nome: 'Super Star Destroyer', preco: '4.570.000,00', multiplo: '1'},
    {codigo: 4, nome: 'TIE Fighter', preco: '75.000,00', multiplo: '2'},
    {codigo: 5, nome: 'Lightsaber ', preco: '6.000,00', multiplo: '5'},
    {codigo: 6, nome: 'DLT-19 Heavy Blaster Rifle', preco: '5.800,00', multiplo: '1'},
    {codigo: 7, nome: 'DL-44 Heavy Blaster Pistol', preco: '1.500,00', multiplo: '10'}
	];

})