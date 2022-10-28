const indicador = document.getElementById('indicador');
const range_caracteres = document.getElementById('num_caracteres');
const checkboxs = document.querySelectorAll('input[type="checkbox"]');
const input_password = document.getElementById('input_password');
const btn_generar = document.getElementById('btn_generar');
const generar = new generarPassword();
checkboxs.forEach(check => {
	check.addEventListener('input', e => {
		if (e.target.checked) {
			e.target.labels[0].querySelector('span').innerHTML = '&check;';
		} else {
			e.target.labels[0].querySelector('span').innerHTML = '&times;';
		}
	});
});

indicador.textContent = range_caracteres.value;

range_caracteres.addEventListener('input', e => {
	indicador.textContent = range_caracteres.value;
});

input_password.value = generar.generatePassword(
	range_caracteres.value,
	false,
	false,
	false
);

btn_generar.addEventListener('click', () => {
	input_password.value = generar.generatePassword(
		range_caracteres.value,
		checkboxs[0].checked,
		checkboxs[1].checked,
		checkboxs[2].checked
	);
});

const ocultarSpam = () => {
	document.querySelector('.app__alert-copied').classList.remove('active');
};

input_password.addEventListener('click', e => {
	input_password.select();
	document.execCommand('copy');
	document.querySelector('.app__alert-copied').classList.add('active');
	let intervalo = setTimeout(ocultarSpam, 2000);
});
