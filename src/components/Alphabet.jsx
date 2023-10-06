import './Alphabet.css';

export default function Alphabet(props) {
	const { dictionary } = props;

	return (
		<div className="alphabet">
	{
		dictionary.map((row, index) =>{
			if (row.kir.small === 'ь') {
				return ( <SoftSignRow key={index} row={ row } /> )
			} else {
				return ( <AlphabetRow key={index} row={ row } /> )
			}
		})
	}
		</div>
	)
}

function AlphabetRow(props) {
	const { row } = props;

	return (
		<div className="alphabet-row">
			<span className="latin">
				{row.lat.big} {row.lat.small} 
			</span>
			<span className="cyrillic">
				{row.kir.big}{row.kir.small}
			</span>
		</div>
	)
}

function SoftSignRow(props) {
	const { row } = props;

	return (
		<div className="alphabet-row">
			<span className="latin">
				{row.lat.big} 
			</span>
			<span className="cyrillic">
				{row.kir.big}
			</span>
		</div>
	)
}