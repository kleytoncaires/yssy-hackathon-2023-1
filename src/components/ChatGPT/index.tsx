import api from 'api';
import { useState } from 'react';

const ChatGPT = () => {
	const [inputText, setInputText] = useState('');
	const [responseText, setResponseText] = useState('');

	const generateResponse = async () => {
		try {
			const response = await api.post('/chat/generate', {
				input_text: inputText,
			});
			setResponseText(response.data.generated_text);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<input
				type='text'
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
			/>
			<button onClick={generateResponse}>Generate Response</button>
			<p>{responseText}</p>
		</div>
	);
};

export default ChatGPT;
