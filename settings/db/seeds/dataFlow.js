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