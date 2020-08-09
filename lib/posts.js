import path from 'path'
import fs from 'fs'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = []

	for (let i = 0; i < fileNames.length; i++) {
		// Remove ".js" from file name to get id
		const fileName = fileNames[i]
		const id = fileName.replace(/\.json$/, '')

		// Read json file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'))

		// Combine the data with the id
		allPostsData.push({
			id,
			...fileContents
		})
	}

	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.timestamp < b.timestamp) {
			return 1
		} else {
			return -1
		}
	})
}
