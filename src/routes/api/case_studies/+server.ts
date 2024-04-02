import { json } from '@sveltejs/kit'
import type { CaseStudy } from '$lib/types'

async function getCaseStudies() {
	let case_studies: CaseStudy[] = []

	const paths = import.meta.glob('/src/posts/*case-study.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<CaseStudy, 'slug'>
			const case_study = { ...metadata, slug } satisfies CaseStudy
			case_study.published && case_studies.push(case_study)
		}
	}

	case_studies = case_studies.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return case_studies
}

export async function GET() {
	const case_studies = await getCaseStudies()
	return json(case_studies)
}
