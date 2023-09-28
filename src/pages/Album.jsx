import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AlbumData from '../data/AlbumData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Album() {
	const { id } = useParams();
	const [album, setAlbum] = useState([]);

	useEffect(() => {
		setAlbum(AlbumData.albums.find((album) => album._id === id));
	});

	const breakText = (text) => {
		return text.replace(/\n/g, '<br/>');
	};

	if (album && album !== null) {
		return (
			<>
				<Row>
					<p id="album-artist-name">
						Artist: {album.artist}
						<br />
						Project: {album.name}
					</p>
				</Row>
				<Row id="album-pic-description">
					<Col lg={4} sm={12}>
						<img
							id="album-content-img"
							src={`../img/${album.imageLink}`}
							alt=""
						/>
					</Col>
					<Col lg={8} sm={12}>
						<p id="album-description" style={{ whiteSpace: 'pre-line' }}>
							{album.description}
						</p>
					</Col>
				</Row>
			</>
		);
	}

	return <h1>An unexpected error occurred.</h1>;
}

export default Album;
