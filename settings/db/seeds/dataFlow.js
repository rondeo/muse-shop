let produto = {
    id: 'int',
    nome: 'string',
    fornecedor: 'string',
    altura: 'int',
    lagura: 'int',
    profundidade: 'int',
    peso: 'float',
    valorCompra: 'float',
    valorVenda: 'float',
    imagens: 'string',
    categorias: 'string',
    obs: 'string'
}
let usuario = {
    id: 'int',
    nome: 'string',
    email: 'string',
    cpf: 'string',
    rua: 'string',
    bairro: 'string',
    cidade: 'string',
    estado: 'string',
    cep: 'string',
    pedidos: 'idsPedidos'
}
let pedidos = {
    id: 'int',
    client: 'idCliente int',
    valor: 'float',
    status: 'string',
    obs: 'string'
}
let formaPagamento = {
    id: 'int',
    clientId: 'int',
    numeroCartao: 'string',
    nomeCartao: 'string',
    validade: 'string',
    bandeira: 'string',
}

// create new products table
'CREATE TABLE `museshop`.`products` ( `id` INT NOT NULL AUTO_INCREMENT , `nome` VARCHAR(200) NOT NULL , `altura` VARCHAR(200) NOT NULL , `largura` VARCHAR(200) NOT NULL , `profundidade` VARCHAR(200) NOT NULL , `valorCompra` FLOAT NOT NULL , `valorVenda` FLOAT NOT NULL , `fornecedor` VARCHAR(200) NOT NULL , `obs` VARCHAR(200) NOT NULL , `peso` FLOAT NOT NULL , `imagens` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;'
