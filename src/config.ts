export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'it',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'dev_test',
  appId: 'EHI4WQ1RFT',
  apiKey: '7ddc119865bbc8833b2586dc0672cf50',
}

export const SUBTITLE=[
	'PREPARAZIONE',
	'TEMPERATURA', 
	'AGITAZIONE',
	'TEMPI DI SVILUPPO',
	"BAGNO D`ARRESTO",
	'FISSAGGIO',
	'LAVAGGIO',
	'IMBIMBENTE',
	'ASCIUGATURA',
	'CAPACITA',
	'DURATA',
	'Caratteristiche principali e vantaggi',
	'PROCESSO',
	'TROUBLE SHOOTING'
]

export const BASE_PATH='/AstroDocu/';

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Chimica', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Page 2', link: 'en/page-2' },
		{ text: 'Page 3', link: 'en/page-3' },

		{ text: 'Another Section', header: true },
		{ text: 'Page 4', link: 'en/page-4' },
	],

	it:[
		{ text: '', header: true },
		{ text: 'Chimica', header: true },
		{ text: 'Introduction', link: 'AstroDocu/it/introduction' },
		{text: 'Colore', link: 'AstroDocu/it/colore'},
		{text: 'Bianco e nero', link: 'AstroDocu/it/biancoNero'},

	]
};
