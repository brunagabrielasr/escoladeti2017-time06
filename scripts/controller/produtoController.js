app.controller('produtoController', function ($scope, produtoService, $routeParams) {
    
    var id = $routeParams.id;
    $scope.produto = produtoService.recupera(id);

    $scope.produtos = produtoService.getProdutos();
    $scope.produto = {};

    $scope.salvar = function () {
        produtoService.salvar(angular.copy($scope.produto));
        $scope.produto = {};
        window.location = "#!/produtos";
    }

    $scope.excluir = function(produto){
    	var confirmacao = confirm("Deseja mesmo excluir?");
    	if(confirmacao){
    		produtoService.excluir(produto);
    	}
    }

    $scope.editar = function(produto){
    	$location.	('/produto/' + produto.id);
    }

   
});