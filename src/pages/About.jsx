import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
	return (
		<>
			<Row>
				<p id="about-header">Meet enerGize studios.</p>
			</Row>
			<Row id="about-content">
				<Col lg={6}>
					<p>
						Suspendisse non finibus nisl. Mauris ornare efficitur odio, sed
						efficitur mauris elementum ac. In a auctor dolor.
					</p>
					<p>
						Praesent varius elit vel augue sollicitudin, ac rutrum purus
						ultricies. Suspendisse ut efficitur nisl. Fusce mollis mollis
						pellentesque.
					</p>
					<p>
						Maecenas vitae lorem scelerisque, condimentum neque a, rhoncus arcu.
						Suspendisse non finibus nisl. Mauris ornare efficitur odio, sed
						efficitur mauris elementum ac. In a auctor dolor.
					</p>
					<p>
						Mauris consectetur magna quis dui pretium porttitor eget non ipsum.
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Aenean elementum accumsan mollis.
					</p>
				</Col>
				<Col lg={6}>
					<p>
						Duis sit amet auctor tellus. Maecenas vitae lorem scelerisque,
						condimentum neque a, rhoncus arcu.
					</p>
					<p>
						Nulla tempor mollis porttitor. Sed pellentesque, mi et aliquam
						pulvinar, augue felis facilisis erat, vitae tincidunt metus ante eu
						tellus.
					</p>
					<p>
						Mauris consectetur magna quis dui pretium porttitor eget non ipsum.
						Aenean elementum accumsan mollis.
					</p>
					<p>Cras in consequat leo, vitae mattis nisi.</p>
					<p>
						Etiam interdum molestie arcu nec tincidunt. Sed ornare cursus
						dignissim.
					</p>
				</Col>
			</Row>
		</>
	);
}

export default About;
