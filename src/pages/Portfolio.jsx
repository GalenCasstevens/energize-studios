import Row from 'react-bootstrap/Row';

function Portfolio() {
	return (
		<>
			<Row>
				<p className="portfolio-header">Some of Our Works.</p>
			</Row>
			<Row id="portfolio-content">
				<p>Chilled Theme</p>
				<p>Limitless Night Rain</p>
				<p>The Golden Rhythm</p>
				<p>Only Tranquility</p>
				<p>The Wave</p>
			</Row>
		</>
	);
}

export default Portfolio;
