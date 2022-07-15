import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './SingleQuestion';

function App() {

	const [questions, setQuestions] = useState(data)

	return (
		<main className='container'>
			<h3>Preguntas y respuestas</h3>
			<section className='info'>
				{questions.map(question => <SingleQuestion key={question.id} {...question} />)}
			</section>
		</main>
	);
}

export default App;
