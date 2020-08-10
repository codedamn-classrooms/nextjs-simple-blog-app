import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

// Implement getStaticProps here

export default function Home({ allPostsData = [] }) {
	return (
		<Layout home>
			<section className={utilStyles.headingMd}>
				<p>My own blog! Yay</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}
