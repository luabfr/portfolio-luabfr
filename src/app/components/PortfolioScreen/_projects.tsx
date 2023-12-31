const aboutPortfolio ={
	name: "About this portfolio",
	description:"This portfolio has been created with React + Next.js. Here you will find some projects I developed it or/and designed it. Furthermore, you can see the complete code in the git repository, and the figma guide project.",
	links:{
		hasGit: "https://github.com/luabfr/portfolio-luabfr",
		hasFigma: "https://www.figma.com/file/VBz6kMvL0QTY6bUMd9L9QW/Portfolio-%40luabfr?type=design&node-id=135-2&mode=design&t=tbSXFwExBOzXKZdC-0",
	}
}


//Market Finder (Mercado Libre)
export const projectMarketFinder = {
	projectName: "MarketFinder",
	projectSubtitle: "A MercadoLibre Frontend Challenge",
	description: "Based on the MercadoLibre Test Challenge, MarketFinder is a personal project I developed to enhance my coding skills. \nThe user can search for a product, and the app connects to the MercadoLibre API to return a list of products that match the user's request. Furthermore, the app includes filters and a dynamic detail view for the product selected by the user.",
	info: {
		year: "2023",
		typeOfWork: "Webapp",
		industry: "Code Challenge",
	},
	tags: ["React", "Next.js", "Ant Design", "API Rest", "TypeScript"],
	imgs: ["market-finder/market-finder-1.png", "market-finder/market-finder-2.png"],
	links: {
		hasUrl: "projects/market-finder",
		hasGit: "https://github.com/luabfr/portfolio-luabfr/tree/master/src/app/projects/market-finder"
	}
}



// Currencies Exchange (Technisys)
const projectCurrenciesExchange = {
	projectName: "Currencies Exchange",
	projectSubtitle: "A Technisys Frontend Challenge",
	description: "This project is the code challenge I received from Technisys as part of the pre-employment process with them. It involves connecting to an API and retrieving the exchange values of currencies chosen by the user.",
	info: {
		year: "2021",
		typeOfWork: "Webapp",
		industry: "Code Challenge",
	},
	tags: ["React", "Redux", "API Rest", "TypeScript", "Styled-Components"],
	imgs: ["currencies-exchange/currencies-exchange.png"],
	links:{
		hasUrl: "projects/currencies-exchange",
		hasGit: "https://github.com/luabfr/portfolio-luabfr/tree/master/src/app/projects/currencies-exchange"
	}
	
}



// Vital (NFT)
const projectVitalNFT = {
	projectName: "Vital",
	projectSubtitle: "An interactive, animated & generative NFT",
	description: "An animated, generative, and interactive artwork developed as an NFT.'Vital' was a personal project initially developed using Processing and later converted to JavaScript with the p5.js library, aiming to be released on the NFT marketplace: fxhash. The project features an interactive terrarium of generative 'bugs' and 'enviroment' that users can collect.",
	info: {
		year: "2012-2022",
		typeOfWork: "NFT - Generative Art",
		industry: "Meeting app",
	},
	tags: ["NFT", "Code Animation", "Interactive Design", "Generative Art", "p5.js", "Processing"],
	imgs: ["vital/vital-1.png", "vital/vital-2.png"],
	links:{
		hasUrl: "https://www.fxhash.xyz/generative/12718"
	}
}



// Billetera Virtual (Grupo Provincia)
const projectCasinoWallet = {
	projectName: "Billetera IPLyC",
	projectSubtitle: "A digital wallet mobile app for Casinos",
	description: "I participated in the design and development of a virtual wallet intended for use in all casinos in the province of Buenos Aires. This project was undertaken by LeArSoft S.A. at the request of the client Grupo Provincia. In this role, I was responsible for both UX/UI design and React Native layout development.",
	info: {
		year: "2021",
		typeOfWork: "App",
		industry: "Financial Services",
	},
	tags: ["Figma", "UX-UI", "Design", "App", "React Native"],
	imgs: ["billetera-casino/billetera-iplyc.png"],
	links:{
		hasFigmaPrototype: "https://www.figma.com/proto/qQMfniuec6ebJZEqHeLzDt/Porfolio-2023---Billetera-IPLyC-(Azul)?type=design&node-id=4420-4153&t=rq7HwBLiSO2lXu1X-0&scaling=scale-down&page-id=4402%3A766&starting-point-node-id=4402%3A788&show-proto-sidebar=1",
		hasFigma:	"https://www.figma.com/file/qQMfniuec6ebJZEqHeLzDt/Porfolio-2023---Billetera-IPLyC-(Azul)"
	}
}



// Mobile App - Anotador de truco
const projectAnotadorDeTruco = {
	projectName: "Anotador de Truco",
	projectSubtitle: "Mobile App for Android. Dev & UX/UI Design",
	description: "Anotador de Truco is a personal project aimed at being my first app on the Play Store. It's designed to keep track of points in the card game 'Truco.' The entire UX/UI design and development were done by me.",
	info: {
		year: "2023",
		typeOfWork: "Mobile App",
		industry: "Card Game",
	},
	tags: ["React Native", "Mobile App", "UX-UI Design", "Redux", "Figma"],
	imgs: ["app-truco/app-truco-1280x720.png"],
	links: {
		hasFigma: "https://www.figma.com/file/GmXVDOZVmEeVtjiJjvZqtS/APP-Truco-Anotador%3A-UI",
		hasFigmaPrototype: "https://www.figma.com/proto/GmXVDOZVmEeVtjiJjvZqtS/APP-Truco-Anotador%3A-UI?type=design&node-id=0-1&t=EOVWU91XXSg7u3HI-0&scaling=scale-down&page-id=0%3A1",
		hasUX:"https://www.figma.com/file/oUxMmQZz0LLYyG0940PSYZ/APP-Truco-Anotador%3A-Benchmark?type=whiteboard&node-id=0-1&t=FGSU6WGELfY4h65H-0",
		hasUrl: "https://play.google.com/store/games"
	}
}



// RanchApp
const projectRanchapp = {
	projectName: "Ranchapp",
	projectSubtitle: "UX/UI Design work for a Coderhouse course",
	description: "The UX and UI design for a mobile application aimed at social gatherings, similar to Meetup and Eventbrite, involved creating an intuitive and visually appealing interface that catered to users seeking social events and meetups. Using Android design-pattern, this work included crafting user-centric experiences, intuitive navigation, event discovery features, engaging event pages, seamless registration and a map view, as well as interactive elements to facilitate connections among users.The design prioritized accessibility, ease of use, and a vibrant aesthetic to enhance the overall user experience.",
	info: {
		year: "2021",
		typeOfWork: "App",
		industry: "Meeting app",
	},
	tags: ["Figma", "UX-UI", "Design", "Benchmark", "Mobile App", "UX Research"],
	imgs: ["ranchapp/ranchapp.png"],
	links:{
		hasFigma: "https://www.figma.com/file/R7STg9O7gHLzHVXmCFBp8i/(Portfolio-2023)-UX%2FUI-App-de-eventos?type=design&node-id=103-493&mode=design&t=FGSU6WGELfY4h65H-0",
		hasFigmaPrototype:"https://www.figma.com/proto/R7STg9O7gHLzHVXmCFBp8i/(Portfolio-2023)-UX%2FUI-App-de-eventos?type=design&node-id=103-896&t=FGSU6WGELfY4h65H-0&scaling=scale-down&page-id=103%3A493&starting-point-node-id=103%3A896&show-proto-sidebar=1",
		hasUX:"https://www.canva.com/design/DAFxJALqTqs/h1cPLjrWpxn75ObMwrFOjQ/view?utm_content=DAFxJALqTqs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
	} 
}



// Octo MIDI Drum
const projectOctoMidiDrum = {
	projectName: "Octo MIDI Drum",
	projectSubtitle: "A MIDI trigger arduino based",
	description: "Octo MIDI Drum is a MIDI trigger drum developed using open-source Arduino. It's a model that belongs to the Tacuara MIDI line, a personal entrepreneurial venture. Some industrial designer colleagues became enthusiastic when they saw the work I had been doing. For the final stage of the project, they decided to get involved with the design and improve it.",
	info: {
		year: "2019",
		typeOfWork: "MIDI Drum ",
		industry: "Digital Music Production",
	},
	tags: ["Arduino", "MIDI", "User Interface", "Interactive Design", "Electronic"],
	imgs: [
		"midi-octo/octo-1.png", "midi-octo/octo-2.png", "midi-octo/octo-3.png", "midi-octo/octo-4.png", 
		"midi-octo/planos-1.jpg", "midi-octo/planos-2.jpg", 
		"midi-octo/proto-1.jpeg", "midi-octo/proto-2.jpg", "midi-octo/proto-3.jpg", ],
	links: {
		hasGit:"https://github.com/luabfr/Proyectos-Arduino/tree/master/Trigger-MIDI_v17bis",
		hasPDF:""
	}
}


// Octo MIDI Drum
const projectSigueGirando = {
	projectName: "Sigue Girando",
	projectSubtitle: "Interactive Musical Chairs Game for City Parks",
	description: "Based on 'Musical chairs', also known as Trip to Jerusalem, is a game of elimination involving players, chairs, and music. It is a staple of many parties worldwide. This version was thought for greens and city parks. The project was designed for Industrial Designers and I developed it on arduino platform.",
	info: {
		year: "2017",
		typeOfWork: "Interactive Installation",
		industry: "Entertainment",
	},
	tags: ["Arduino", "Interactive Installation", "Interactive Design", "Electronic"],
	imgs: ["sigue-girando/siguegirando-1.jpg", "sigue-girando/siguegirando-2.jpg"],
	links: {
		hasGit: "https://github.com/luabfr/Proyectos-Arduino/tree/master/SigueGirando_Sketch_15_v3"
	}
}





// Improvi
const projectImprovi = {
	projectName: "Improvi",
	projectSubtitle: "Musical device prototype",
	description: "Improvi is a sound sequencer developed on the Arduino platform, allowing students to experiment and engage with the world of sound in a playful, immediate, and collaborative manner. Together with a group of Industrial Design students (FADU-UBA) comprised of Luca Cantarelli, Tomas Ottolenghi, and Julieta Vergottini, we developed Improvi, an interactive device focused on musical and sound education.",
	info: {
		year: "2017",
		typeOfWork: "Sound Device",
		industry: "Education",
	},
	tags: ["Arduino", "User Interface", "Interactive Design", "Open Source", "Electronic"],
	imgs: ["improvi/improvi-0.png", "improvi/improvi-1.jpg"],
	links: {
		hasGit: "https://github.com/luabfr/Proyectos-Arduino/tree/master/Improvi_v13",
		hasVimeo: "https://vimeo.com/224895548"
	}

	
}



const projectPanchitoCD = {
	projectName: "Aparecer - Francisco Gortari",
	projectSubtitle: "Artwork & Packaging for a great Psycholdelic Rock Album",
	description: "I was contacted by the musician and psychedelic rock producer Francisco Gortari to design the artwork for his new album 'Aparece'. The artist requested that the visual concept be influenced by 70s rock albums. The project involved creating both the album cover art and the CD packaging. It was incredibly exciting to be part of this amazing rock project!",
	info: {
		year: "2017",
		typeOfWork: "Album Cover ",
		industry: "Music Production",
	},
	tags: ["Graphic Design", "Conceptual Art", "Packaging" , "Album Cover", "Spotify Art", "Photoshop"],
	imgs: ["aparecer-album/aparecer-1.jpg", "aparecer-album/aparecer-2.jpg", "aparecer-album/aparecer-3.jpg", "aparecer-album/aparecer-4.jpg", ],
	links: {
		hasSpotify: "https://open.spotify.com/intl-es/album/2QlqDa9ACrRZ7M9i4y8TmU"
	}
}






export const projectsContent = [
	projectMarketFinder,
	projectCurrenciesExchange,
	projectCasinoWallet,
	projectAnotadorDeTruco,
	projectRanchapp,
	projectVitalNFT,
	projectOctoMidiDrum,
	projectImprovi,
	projectPanchitoCD,
	projectSigueGirando,
]


export const projects = [
	{
		category: "Code & Frontend",
		projectsList: [
			projectMarketFinder.projectName, 
			projectCurrenciesExchange.projectName,
			projectVitalNFT.projectName,
			projectAnotadorDeTruco.projectName

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
			projectSigueGirando.projectName,

		]
	},
]


