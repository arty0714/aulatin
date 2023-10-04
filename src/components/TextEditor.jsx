import { useState } from 'react';
import './TextEditor.css';

export default function TextEditor() {
	const [content, setContent] = useState('');

	function changeContent(e) {
		setContent(e.target.value);
	}

	return (
		<div className="text-editor content">
			<textarea
			className="textarea content" 
			value={content} 
			onChange={changeContent}></textarea>
		</div>	
	)
}