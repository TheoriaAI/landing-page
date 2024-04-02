import type { CaseStudy } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/case_studies')
	const case_studies: CaseStudy[] = await response.json()
	return { case_studies }
}
