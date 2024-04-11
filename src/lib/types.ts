export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
	author: string
	author_image: string
	image: string
}

export type CaseStudy = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
	author: string
	author_image: string
	image: string
}
