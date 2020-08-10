import Link from 'next/link'
import Head from 'next/head'

export default function () {
	return (
		<div>
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
