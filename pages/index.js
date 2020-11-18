import Head from 'next/head';
import Link from 'next/link';
import Container from '../components/container';
import Layout from '../components/layout/layout';

export default function Index() {
	return (
		<>
			<Layout>
				<Head>
					<title>RedQ Inc | We create product that creates value</title>
				</Head>
				<Container>
					<div>RedQ</div>
					<Link href="/blog">
						<a>
							<span style={{ color: 'blue' }}>Blog</span>
						</a>
					</Link>{' '}
					from here
				</Container>
			</Layout>
		</>
	);
}
