import { useState } from 'react';
import './TextEditor.css';

export default function TextEditor(props) {
	const { content, changeContent } = props;

	return (
		<div className="text-editor content">
			<textarea
			className="textarea content" 
			value={content} 
			onChange={changeContent}></textarea>
		</div>	
	)
}