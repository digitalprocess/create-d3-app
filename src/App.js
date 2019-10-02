import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChartWrapper from './ChartWrapper';

function App() {
	return (
		<div className="App">
			<Navbar bg="light" className="justify-content-center">
				<Navbar.Brand>CreateD3App</Navbar.Brand>
			</Navbar>
			<Container>
				<Row>
					<Col md={6} xs={12}><ChartWrapper /></Col>
					<Col md={6} xs={12}></Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
