const Number = ({ match }) => {
	const { number } = match.params;
	return <h1>{isNaN(Number(number)) ? "Invalid Number" : number}</h1>;
};
export default Number;
