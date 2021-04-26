
const SignUpAdmin = () => {
    return `
	<div id="data-router">
	<div class="container">
		<div class="contact-box">
			<div class="left"></div>
			<div class="right">
				<form id="form" name="formulario" method="post" action="">
				<h2>Registro</h2>
				<label for="name"> </label>
				<input name="name" type="text" class="field" placeholder="Nombre">
				<label for="lastName"> </label>
				<input name="lastName" type="text" class="field" placeholder="Apellido">
				<label for="password"> </label>
				<input name="password" type="text" class="field" placeholder="Contraseña">
				<label for="confirmPassword"> </label>
				<input name= "confirmPassword" type="text" class="field" placeholder="Confirma tu contraseña">
				<label for="role"> </label>
				<input name="role" type="text" class="field" placeholder="role">
			</form>
				<button class="btn">Enviar</button>
			</div>
		</div>
	</div>
	</div>

`;
}