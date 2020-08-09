import Link from 'next/link'
import Head from 'next/head'
import styles from './styles.module.scss'

export default function () {
	return (
		<div id="codedamn-post-container" className={styles.post}>
			<h1>First Post</h1>
			<Link href="/">
				<a>Back to Home</a>
			</Link>
			<Head>
				<title>First Post</title>
			</Head>
		</div>
	)
}
