const axios = require('axios')
const productsModel = require('../models/productsModel')

module.exports = (data) => new Promise((resolve, reject) => {

	let {cep ,id} = data
	let prodId = {
		id: id
	}
	productsModel.getOne(prodId).then(response => {

		if(response.length){
			
			let { peso, valorVenda } = response[0]
			console.log(parseInt(valorVenda))
			peso = parseInt(peso) / 10
			valorVenda = parseInt(valorVenda)
			let altura = 9;
			let largura = 18;
			let comprimento = 28;
			let testing = `peso ${peso} valorVenda ${valorVenda} altura ${altura} largura ${largura}`
			let url = `http://correios-server.herokuapp.com/frete/prazo?nCdServico=40010,41106&sCepOrigem=92035012&sCepDestino=${cep}&nVlPeso=${peso}&nCdFormato=1&nVlComprimento=${comprimento}&nVlAltura=${altura}&nVlLargura=${largura}&nVlValorDeclarado=${valorVenda}`
			
			axios.get(url)
				.then(response => {
					let data = response.data.response
					resolve(data)
				})
				.catch(err => {
					console.log(err)
					reject(err)
				})
		}
	})
})

// module.exports = () => {

// 	let options = {
// 		"nCdServico": "40010, 41106",
// 		"sCepOrigem": "92035012",
// 		"sCepDestino": "92325380",
// 		"nVlPeso": "1",
// 		"nCdFormato": "1",	
// 		"nVlComprimento": "20",
// 		"nVlAltura": "20",
// 		"nVlLargura": "20",
// 		"nVlDiametro": "20",
// 		"nVlValorDeclarado":"200"
// 	}
// 	correios.calcPreco(options, function (err, result) {
// 	  console.log(result);
// 	});
// }
