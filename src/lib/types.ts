export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}

export type CaseStudy = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
