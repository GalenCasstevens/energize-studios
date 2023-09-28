import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';

function Header() {
	return (
		<Link id="logo-link" to={'/'}>
			<h1 id="logo">
				<FontAwesomeIcon icon={faBoltLightning} /> enerGize studios
			</h1>
		</Link>
	);
}

export default Header;
