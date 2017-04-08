app.service('produtoService', function () {
    this.produtos = [
    	{
			codigo: 1,
			nome: "prod1",
			preco: 12
		},
		{
			codigo: 2,
			nome: "bolsa" ,
			preco: 25
		},
		{
			codigo: 3,
			nome: "corrente",
			preco: 40
		}
    ];

    //this.contador = 1;
    this.getProdutos = function () {
        return this.produtos;
    };

    this.salvar = function (produto) {
        //produto.codigo = this.contador++;
        this.produtos.push(produto);
    }

    this.excluir = function(produto){
    	this.produtos.forEach(function(p, i){
    		if(p.codigo == produto.codigo){
				indice = i;
			}
		});
		this.produtos.splice(indice,1);
    }

    this.editar = function(item){
    	this.produtos.forEach(function(p, i){

			if(p.id == product.id){

				p = product;
			}
		});
    }
});