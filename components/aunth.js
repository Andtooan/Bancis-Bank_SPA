

const aunth = () => {
	return `
	<div id="data-router">
		<div class="container">
			<div class="contact-box">
				<div class="left"></div>
				<div class="right">
					
					<form id="form" name="formulario" method="POST" action="https://banciss-api.herokuapp.com/api/auth/twoAf">
						<h2>Inserta tu codigo</h2>
						<label class="coding" for="code"></label>
						<input type="number" id="code" name="code" >
						<button type="submit" name="submit" class="btn">Enviar</button>
					</form>
					
				</div>
			</div>
		</div>
	</div>
	`;
  };
  


