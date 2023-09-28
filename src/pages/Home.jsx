import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AlbumData from '../data/AlbumData';

function Home() {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		setAlbums(AlbumData.albums);
	}, []);

	if (albums && albums !== null) {
		return (
			<>
				<Row className="album-list-row">
					{albums.map((album) => (
						<Col lg={4}>
							<Link to={`albums/${album._id}`}>
								<img
									className="album-list-item"
									src={require(`../assets/${album.imageLink}`)}
									alt=""
								/>
							</Link>
						</Col>
					))}
				</Row>
			</>
		);
	}

	return <h1>An unexpected error occurred.</h1>;
}

export default Home;
