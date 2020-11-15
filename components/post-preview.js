import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
// motion variants
const fadeInBottom = {
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
};

export default function PostPreview({
	slug,
	date,
	title,
	excerpt,
	coverImage,
}) {
	return (
		<motion.article variants={fadeInBottom}>
			<figure className="mb-8 relative">
				<CoverImage
					className="rounded w-full"
					slug={slug}
					title={title}
					src={coverImage}
				/>
				<div
					className="absolute bg-gray-900 bg-opacity-25"
					style={{
						width: '80%',
						height: '80%',
						zIndex: -1,
						bottom: 0,
						left: '10%',
						filter: 'blur(15px)',
					}}
				></div>
			</figure>
			<div className="mb-4 text-blue-700 uppercase tracking-widest text-sm font-semibold">
				{/*{category !== undefined ? <Categories items={category} /> : ''}*/}
				{date !== undefined ? <DateFormatter dateString={date} /> : ''}
			</div>
			<header className="mb-6">
				<h3 className="text-2xl font-semibold leading-snug tracking-tight">
					<Link as={`/posts/${slug}`} href="/posts/[slug]">
						<a className="text-gray-900 transition-all duration-200 hover:text-gray-700">
							{title}
						</a>
					</Link>
				</h3>
			</header>
			<p className="leading-relaxed mb-8 text-gray-700">{excerpt}</p>
			<footer>
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a className="inline-flex items-center tracking-tight font-semibold text-gray-900 transition-all duration-200 hover:text-gray-700">
						Read More <BsArrowRight className="ml-2 text-xl" />
					</a>
				</Link>
			</footer>
		</motion.article>
	);
}
