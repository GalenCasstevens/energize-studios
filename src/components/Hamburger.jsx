import { useDispatch } from 'react-redux';
import { toggleHamburger } from '../features/toggleHamburger/toggleHamburgerSlice';

function Hamburger() {
	const dispatch = useDispatch();

	return (
		<input
			type="image"
			class="hamburger"
			onClick={() => dispatch(toggleHamburger())}
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
		/>
	);
}

export default Hamburger;
