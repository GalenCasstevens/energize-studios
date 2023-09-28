import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import Hamburger from './components/Hamburger';
import Album from './pages/Album';
import About from './pages/About';
import Process from './pages/Process';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Sources from './pages/Sources';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Hamburger />
				<Row>
					<Col md={4}>
						<Menu />
					</Col>
					<Col id="content" md={8}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/albums/:id" element={<Album />} />
							<Route path="/about" element={<About />} />
							<Route path="/process" element={<Process />} />
							<Route path="/portfolio" element={<Portfolio />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/sources" element={<Sources />} />
						</Routes>
					</Col>
				</Row>
			</Router>
		</>
	);
}

export default App;
