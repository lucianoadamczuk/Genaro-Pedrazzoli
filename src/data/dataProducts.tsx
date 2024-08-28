/* ------------------------------- consultings ------------------------------ */
const consultings = {
	basic: {
		slot: 'asesoria-basica',
		name: 'Asesoría Basica',
		video: '/videos/consulting-basic.webm',
		description: [
			'Formulario para conocerte mejor',
			'Rutina de entrenamiento personalizada para el gimnasio o el hogar.',
			'Cuaderno de entrenamiento para seguir tu progresión.',
			'Tú mismo llevaras la sobrecarga progresiva',
			'Contacto por correo electronico.',
			'Checkos cada 30 días.',
			'Guía de alimentación (No es una dieta).',
		],
		buyingOptions: 'Adquirir',
	},
	standard: {
		slot: 'asesoria-standard',
		name: 'Asesoría Standard',
		video: '/videos/consulting-standard.webm',
		description: [
			'Formulario para conocerte mejor',
			'Rutina de entrenamiento personalizada para el gimnasio o el hogar.',
			'Cuaderno de entrenamiento para seguir tu progresión.',
			'Yo llevaré la sobrecarga progresiva',
			'Contacto por Whatsapp.',
			'Checkos cada 21 días.',
			'Guía de alimentación.',
			'Te diré las calorías y macronutrientes que consumiras.',
			'Veremos qué cantidad de cardio necesitaremos en caso de querer bajar de peso',
			'Incluye La Biblioteca de Ejercicios.',
		],
		buyingOptions: 'Adquirir',
	},
	premium: {
		slot: 'asesoria-premium',
		name: 'Asesoría Premium',
		video: '/videos/consulting-premium.webm',
		description: [
			'Formulario para conocerte mejor.',
			'Rutina de entrenamiento personalizada para el gimnasio o el hogar.',
			'Cuaderno de entrenamiento para seguir tu progresión.',
			'Te estructuraré una dieta en base al objectivo.',
			'Veremos qué cantidad de cardio necesitaremos en caso de querer bajar de peso.',
			'Incluye La Biblioteca de Ejercicios.',
			'Acceso a la comunidad de Facebook donde podrás interactuar con otros asesorados que están transitando tu mismo camino.',
			'Guías escritas por mí para entender el por qué y el para qué de lo que haremos.',
			'Llamada de 15 minutos cuando lo creas necesario.',
		],
		buyingOptions: 'Adquirir',
	},
};

/* -------------------------------- routines -------------------------------- */
const routines = {
	beginner: {
		slot: 'rutina-para-principiantes',
		name: 'Rutina para Principiantes',
		description: [
			'Rutinas ideales para aquellas personas que están comenzando en este maravilloso mundo o que aún no tengan mucha experiencia.',
			"Tu foco deberá estar en ejecutar correctamente los diferentes ejercicios, día tras día enseñarle a tu cuerpo a dar un poco más de sí mismo, y sobre todo difrutar.',",
		],
		buyingOptions: 'Adquirir',
	},
	intermediate: {
		slot: 'rutina-para-intermedios',
		name: 'Rutina para intermedios',
		description: [
			'Ya diste tus primeros pasos, tu tiempo entrenando te hizo estár adaptado y ya es tu estilo de vida, sabes aplicar fuerza.',
			'No viene mal revisar la tecnica de los ejericios, siempre se puede mejorar, mentalizate antes de cada entrenamiento, animate a sufrir un poco más en cada serie.',
			'La motivación que te trajo hasta aquí va a ser la que te permita seguir avanzando ¡no a pierdas!',
		],
		buyingOptions: 'Adquirir ',
	},
	advance: {
		slot: 'rutina-para-avanzados',
		name: 'Rutina para avanzados',
		description: [
			'Después de tu largo trayecto entrenando empiezas a ver la cima pero sabes que aún está lejos.',
			'Ya sea que no sepas cómo avanzar, quieras experimentar una rutina distinta o innovar, este tipo de rutinas son para ti.',
			'¡Vamos al último nivel!',
		],
		buyingOptions: 'Adquirir ',
	},
};

/* --------------------------------- library -------------------------------- */
const library = {
	guides: {
		slot: 'guias-fitness',
		name: 'Guías Fitness',
		text: 'He creado contenido a modo de lectura, como guías, manuales, consejos, para que puedas empezar a aprender cómo desarrollar tu físico y profundizar en conocimiento.',
		description: [
			' Más de 100 páginas de contenido',
			'Mejora tus habitos',
			'Mejora tu composición corporal',
			'Guía sobre alimentación',
			'Guía completa sobre entrenamiento',
			'Entrenamiento de fuerza para la salud',
			'Calculadora de calorías',
		],
		buyingOptions: 'Adquirir',
	},
	exersisesRoom: {
		slot: 'sala-de-ejercicios',
		name: 'La sala de ejercicios',
		description: [
			'Tendrás acceso una sección multimedia donde podrás aprender la técnica de los ejercicios que van a estar acompañandote a lo largo de tu vida en el gimnasio.',
			'Algunas de las Asesorías la traen incluida. Consulta antes.',
		],
		buyingOptions: 'Adquirir',
	},
	combo: {
		slot: 'combo',
		name: 'Guía fitness y Sala de ejercicios',
		description:
			'Aprovechá esta imperdible oferta todo con el contenido de ambos productos.',
		buyingOptions: 'Adquirir',
	},
};

export const dataProducts = { consultings, routines, library };
