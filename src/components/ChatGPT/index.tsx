import axios from 'axios';
import { useEffect, useState } from 'react';

interface Response {
	message: string;
}

const ChatGPT = () => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		axios
			.get<Response>(
				'https://api.openai.com/v1/engines/davinci/completions',
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer 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
`,
					},
					params: {
						prompt: 'Hello',
						max_tokens: 5,
					},
				}
			)
			.then((response) => {
				setMessage(response.data.message);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div>
			<p>{message}</p>
		</div>
	);
};

export default ChatGPT;
