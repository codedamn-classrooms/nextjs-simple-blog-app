import Link from 'next/link'

export default function () {
	return (
		<div>
			<h1>First Post</h1>
			<Link href="/">
				<a>Back to Home</a>
			</Link>
		</div>
	)
}
