class generarPassword {
	constructor() {
		this.caracteres = {
			minusculas: 'abcdefghijlmnopqrstuvwxyz',
			mayusculas: 'abcdefghijlmnopqrstuvwxyz'.toUpperCase(),
			numeros: '1234567890',
			especiales: '#$%&/!?+*',
		};
	}
	generatePassword(length, incl_mayus, incl_num, incl_esp) {
		let caracteres = this.caracteres,
			caracteresDef = caracteres.minusculas,
			password = '';

		if (incl_mayus === true) {
			caracteresDef += caracteres.mayusculas;
		}
		if (incl_num === true) {
			caracteresDef += caracteres.numeros;
		}
		if (incl_esp === true) {
			caracteresDef += caracteres.especiales;
		}

		for (let i = 0; i <= length; i++) {
			password += caracteresDef.charAt(
				Math.floor(Math.random() * caracteresDef.length)
			);
		}

		return password;
	}
}
