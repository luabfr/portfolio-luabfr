
//Market Finder (Mercado Libre)
export const projectMarketFinder = {
	projectName: "MarketFinder",
	description: "Based on the MercadoLibre Test Challenge, MarketFinder is a personal project I developed to enhance my coding skills. \nThe user can search for a product, and the app connects to the MercadoLibre API to return a list of products that match the user's request. Furthermore, the app includes filters and a dynamic detail view for the product selected by the user.",
	info: {
		year: "2023",
		typeOfWork: "Webapp",
		industry: "Code Challenge",
	},
	tags: ["React", "Next.js", "Ant Design", "API Rest", "TypeScript"],
	imgs: ["capture.jpg"],
	link: "projects/market-finder"
}

// Currencies Exchange (Technisys)
const projectCurrenciesExchange = {
	projectName: "Currencies Exchange",
	description: "This project is the code challenge I received from Technisys as part of the pre-employment process with them. It involves connecting to an API and retrieving the exchange values of currencies chosen by the user.",
	info: {
		year: "2021",
		typeOfWork: "Webapp",
		industry: "Code Challenge",
	},
	tags: ["React", "Redux", "API Rest", "TypeScript", "Custom Hooks", "Styled-Components"],
	imgs: ["capture.jpg"],
	link: "projects/currencies-exchange"
}


// Vital (NFT)
const projectVitalNFT = {
	projectName: "Vital: an interactive NFT",
	description: "An animated, generative, and interactive artwork developed as an NFT.'Vital' was a personal project initially developed using Processing and later converted to JavaScript with the p5.js library, aiming to be released on the NFT marketplace: fxhash. The project features an interactive terrarium of generative 'bugs' that users can collect.",
	info: {
		year: "2012-2022",
		typeOfWork: "NFT - Generative Art",
		industry: "Meeting app",
	},
	tags: ["NFT", "Code Animation", "Interactive Design", "Creative Coding", "Generative Art", "p5.js", "Processing"],
	imgs: ["capture.jpg"],
	link: "www.fxhash.com/dasdasd2"
}

// Billetera Virtual (Grupo Provincia)
const projectCasinoWallet = {
	projectName: "Casino Wallet",
	description: "I participated in the design and development of a virtual wallet intended for use in all casinos in the province of Buenos Aires. This project was undertaken by LeArSoft S.A. at the request of the client Grupo Provincia. In this role, I was responsible for both UX/UI design and React Native layout development.",
	info: {
		year: "2021",
		typeOfWork: "App",
		industry: "Financial Services",
	},
	tags: ["Figma", "UX-UI", "Design", "Benchmark", "App", "React Native"],
	imgs: ["capture.jpg"],
	link: "figma.com/dasdasd"
}

// RanchApp
const projectRanchapp = {
	projectName: "Ranchapp",
	description: "The UX and UI design for a mobile application aimed at social gatherings, similar to Meetup and Eventbrite, involved creating an intuitive and visually appealing interface that catered to users seeking social events and meetups.This included crafting user- centric experiences, intuitive navigation, event discovery features, engaging event pages, seamless registration and a map view, as well as interactive elements to facilitate connections among users.The design prioritized accessibility, ease of use, and a vibrant aesthetic to enhance the overall user experience.",
	info: {
		year: "2021",
		typeOfWork: "App",
		industry: "Meeting app",
	},
	tags: ["Figma", "UX-UI", "Design", "Benchmark", "App", "UX Research"],
	imgs: ["capture.jpg"],
	link: "figma.com/dasdasd2"
}

// Octo MIDI Drum
const projectOctoMidiDrum = {
	projectName: "Octo MIDI Drum",
	description: "Octo MIDI Drum is a MIDI trigger drum developed using open-source Arduino. It's a model that belongs to the Tacuara MIDI line, a personal entrepreneurial venture. Some industrial designer colleagues became enthusiastic when they saw the work I had been doing. For the final stage of the project, they decided to get involved with the design and improve it.",
	info: {
		year: "2019",
		typeOfWork: "MIDI Drum ",
		industry: "Digital Music Production",
	},
	tags: ["Arduino", "MIDI", "Music Device", "User Interface", "Interactive Design", "Open Source", "Electronic"],
	imgs: ["capture.jpg"],
	link: "public/octo-midi.jpg"
}

// Improvi
const projectImprovi = {
	projectName: "Improvi",
	description: "Improvi is a sound sequencer developed on the Arduino platform, allowing students to experiment and engage with the world of sound in a playful, immediate, and collaborative manner. Together with a group of Industrial Design students (FADU-UBA) comprised of Luca Cantarelli, Tomas Ottolenghi, and Julieta Vergottini, we developed Improvi, an interactive device focused on musical and sound education.",
	info: {
		year: "2017",
		typeOfWork: "Sound Device",
		industry: "Education",
	},
	tags: ["Arduino", "Music Device", "User Interface", "Interactive Design", "Open Source", "Electronic"],
	imgs: ["capture.jpg", "https://vimeo.com/224895548"],
	link: "public/octo-midi.jpg"
}

const projectPanchitoCD = {
	projectName: "Aparecer - Rock Album Cover",
	description: "I was contacted by the musician and psychedelic rock producer Francisco Gortari to design the artwork for his new album 'Aparece'. The artist requested that the visual concept be influenced by 70s rock albums. The project involved creating both the album cover art and the CD packaging. It was incredibly exciting to be part of this amazing rock project!",
	info: {
		year: "2017",
		typeOfWork: "Album Cover ",
		industry: "Music Production",
	},
	tags: ["Graphic Design", "Conceptual Art", "Packaging" , "Album Cover", "Spotify Art"],
	imgs: ["capture.jpg", "capture.jpg", "capture.jpg", "capture.jpg"],
	link: "https://open.spotify.com/intl-es/album/2QlqDa9ACrRZ7M9i4y8TmU"
}



export const projectsContent = [
	projectMarketFinder,
	projectCurrenciesExchange,
	projectCasinoWallet,
	projectRanchapp,
	projectVitalNFT,
	projectOctoMidiDrum,
	projectImprovi,
	projectPanchitoCD,
]


export const projects = [
	{
		category: "Code & Frontend",
		projectsList: [
			projectMarketFinder.projectName, 
			projectCurrenciesExchange.projectName,
			projectVitalNFT.projectName

		]
	},
	{
		category: "Design & UX/UI",
		projectsList: [
			projectCasinoWallet.projectName, 
			projectRanchapp.projectName,
			projectPanchitoCD.projectName,
		]
	},
	{
		category: "Interfaces & Devices",
		projectsList: [
			projectOctoMidiDrum.projectName, 
			projectImprovi.projectName,

		]
	},
]


