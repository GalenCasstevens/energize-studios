import { Link } from 'react-router-dom';

function Menu() {
	return (
		<ul id="navigation">
			<li>
				<Link to={'/'}>Home</Link>
			</li>
			<li>
				<Link to={'/about'}>About</Link>
			</li>
			<li>
				<Link to={'/process'}>Process</Link>
			</li>
			<li>
				<Link to={'/portfolio'}>Portfolio</Link>
			</li>
			<li>
				<Link to={'/contact'}>Contact</Link>
			</li>
			<li>
				<Link to={'/sources'}>Sources</Link>
			</li>
		</ul>
	);
}

export default Menu;
