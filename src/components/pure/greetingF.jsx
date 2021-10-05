/* componente funcion */
import React, {useState} from 'react';
import PropTypes from 'prop-types';


// añadimos las props
const Greetingf = (props) => {

	// Breve introducción a useState
	// const [variable, metodo para actualizarlo] = useState(valor inicial)
	const [age, setage] = useState(39);

	const birthday = () => {
		// actualizamos el State
		setage(age + 1);
	}

	return (
		<div>
			<h1>Hola {props.name} desde el componente funcional</h1>
			<h2>Tu edad es: {this.state.age}</h2>
			{/* creamos en el boton onclick y la funcion birthday */}
			<div>
				<button onclick={this.birthday}>Cumplir años</button>
			</div>
		</div>
	);
};

/* añadimos el tipo de props */
Greetingf.propTypes = {
	name: PropTypes.string,
};


export default Greetingf;
