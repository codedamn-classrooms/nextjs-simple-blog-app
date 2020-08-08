import styles from '../styles/index.module.scss'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
	return (
		<div className={styles.hello}>
			<h1>Hello from codedamn!</h1>
			<Link href="/posts/first-post">
				<a>Read This!</a>
			</Link>
			<Head>
				<title>My First Blog</title>
			</Head>
		</div>
	)
}

export default Home
