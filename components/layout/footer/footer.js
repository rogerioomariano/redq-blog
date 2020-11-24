import Container from '../../container';
import Widgets from './widgets';
import Copyright from './copyright';

export default function Footer() {
	return (
		<footer className="bg-rq-gray-800 py-5 md:py-4">
			<Container>
				<Widgets />
				<Copyright />
			</Container>
		</footer>
	);
}