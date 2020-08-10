import styles from '../styles/index.module.scss'
import Link from 'next/link'

const Home = () => {
	return (
		<div className={styles.hello}>
			<h1>Hello from codedamn!</h1>
			<Link href="/posts/first-post">
				<a>Read This!</a>
			</Link>
		</div>
	)
}

export default Home
