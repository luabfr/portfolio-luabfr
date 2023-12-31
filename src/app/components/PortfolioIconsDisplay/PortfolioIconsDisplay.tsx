import { FC } from "react";
import { 
	IconUxCircle,
	IconVimeoColor,
	IconPlaystoreColor,
	IconPlaystoreGoogleColor,
	IconSpotifyColor, 
	IconGitColor,
	IconMobileCode,
	IconOpen,
	IconFigmaBgColor,
	IconFigmaColor,
	IconFigmaProto,
	IconYoutubeColor,
	IconPDF,
} from "../Icons/Icons"
import { ProjectsContentProps } from "../PortfolioScreen/PortfolioInterfaces"
import styled from "styled-components";
import Link from "next/link";
import styleSystem from "../styleSystem";

interface ProjectComponentProps {
	links?: ProjectsContentProps['thisProject']['links'];
}

const A = styled.a`
 	margin-right: .5rem;
	margin-left: .5rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border: 2px solid ${styleSystem.primaryCol};
	background: ${styleSystem.primaryCol2};
	transition: all .3s;
	&:hover{
		border-color: ${styleSystem.primaryCol};
		background: ${styleSystem.light};
	}
`;

const Div =styled.div`
	display: flex;
	align-items: center;
	padding-top: 6px;
`

const PortfolioIconsDisplay: FC<ProjectComponentProps> = ({ links })=>{
	return(
		<div>
			{links && (
				<Div>
					{links.hasUrl && 
						<A href={links.hasUrl}  target="_blank">
							<IconOpen />
						</A>
					}
					{links.hasGit && 
						<A href={links.hasGit} target="_blank">
							<IconGitColor/>
						</A>
					}
					{links.hasFigma && 
						<A href={links.hasFigma} target="_blank">
							<IconFigmaColor/>
						</A>}
					{links.hasFigmaPrototype && 
						<A href={links.hasFigmaPrototype} target="_blank">
							<IconFigmaProto/>
						</A>
						}
					{links.hasUX && 
						<A href={links.hasUX} target="_blank">
							<IconUxCircle/>
						</A>
					}
					{links.hasVimeo && 
						<A href={links.hasVimeo} target="_blank">
							<IconVimeoColor/>
						</A>
					}
					{links.hasYoutube && 
						<A href={links.hasYoutube} target="_blank">
							<IconYoutubeColor/>
						</A>
					}
					{links.hasSpotify && 
						<A href={links.hasSpotify} target="_blank">
							<IconSpotifyColor/>
						</A>}
					{links.hasPDF && 
						<A href={links.hasPDF} target="_blank">
							<IconPDF/>
						</A>
					}
				</Div>
			)}
		</div>
	)
}



export default PortfolioIconsDisplay