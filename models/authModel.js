let knex = require('../settings/db/knex')

module.exports = {
	verifyLogin: (data) => new Promise((resolve, reject) => {
		let { email, password } = data;
		let responseData = {};
		knex('users').where('email', email)
			.then(response => {
				console.log(response, 'model line 9')
				if(response.length){
					knex('users').where('email', email).andWhere('password', password).then(authResponse => {
						if (authResponse.length) {
								responseData = {
									code: 200,
									response: authResponse
								}
								resolve(responseData)
							}
							else {
								responseData = {
									code: 0,
								}
								resolve(responseData)
							}
					})
				}
				else{
					responseData = {
						code: 205,
						message: 'Email não cadastrado'
					}
					resolve(responseData)
				}
				
			}).catch(err => {
				reject(err)
			})
	}),
	signUp: (data) => new Promise((resolve, reject) => {
		knex('users').select('*').where('cpf', data.cpf).then(responseCPF => {
			let dataResponse = {}
			if (responseCPF.length) {
				dataResponse = {
					code: 2,
					message: 'User Already exists'
				}
				return resolve(dataResponse)
			}
			else {
				knex('users').insert(data)
					.then(response => {
						if (response.length) {
							dataResponse = {
								code: 200,
								data: response,
								message: 'User created!'
							}
						}
						else {
							dataResponse = {
								code: 0,
								data: response,
								message: 'No user inserted!'
							}
						}
						return resolve(dataResponse)
					})
					.catch(err => {
						console.log(err)
						return reject(0)
					})
			}
		})

	})
}