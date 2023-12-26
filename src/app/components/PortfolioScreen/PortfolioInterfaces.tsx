export interface ProjectsContentProps {
	thisProject: {
		projectName: string,
		projectSubtitle?: string,
		description: string,
		info: {
			year: string,
			typeOfWork: string,
			industry: string,
		},
		tags: string[],
		imgs: string[],
		links?: {
			hasUrl?: string,
			hasGit?: string,
			hasFigma?: string,
			hasFigmaPrototype?: string,
			hasUX?: string,
			hasVimeo?: string,
			hasYoutube?: string,
			hasSpotify?: string,
			hasPDF?: string,
		}
	}
}