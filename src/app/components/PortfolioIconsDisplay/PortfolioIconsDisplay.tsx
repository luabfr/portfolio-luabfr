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
	IconPlayStore,
	IconGithubName,
} from "../Icons/Icons"
import { ProjectsContentProps } from "../PortfolioScreen/PortfolioInterfaces"
import styled from "styled-components";
import Link from "next/link";
import styleSystem from "../styleSystem";
import { Button, Divider, Space, Tooltip } from 'antd';


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
	*{
		font-family: ${styleSystem.font1};
	}
`

const PortfolioIconsDisplay: FC<ProjectComponentProps> = ({ links })=>{
	return(
		<div>
			{links && (
				<Div>
					{links.hasPlayStore &&
						<Tooltip title="Go to Play Store" color={"black"} >
          		<A href={links.hasPlayStore} target="_blank">
								<IconPlayStore />
							</A>
						</Tooltip>
					}
					{links.hasUrl && 
						<Tooltip title="Go to link" color={"black"} >
							<A href={links.hasUrl}  target="_blank">
								<IconOpen />
							</A>
						
						</Tooltip>
					}
					{links.hasGit && 
						<Tooltip title="See GitHub's code" color={"black"} >
							<A href={links.hasGit} target="_blank">
								<IconGithubName />
							</A>
						
						</Tooltip>
					}
					{links.hasFigma && 
						<Tooltip title="See Figma's project" color={"black"} >
							<A href={links.hasFigma} target="_blank">
								<IconFigmaColor/>
							</A>
						
						</Tooltip >
					}
					{links.hasFigmaPrototype && 
						<Tooltip title="See Figma's Prototype" color={"black"} >
							<A href={links.hasFigmaPrototype} target="_blank">
								<IconFigmaProto/>
							</A>
						
						</Tooltip >
						}
					{links.hasUX && 
						<Tooltip title="See UX Research" color={"black"} >
							<A href={links.hasUX} target="_blank">
								<IconUxCircle/>
							</A>
						
						</Tooltip >
					}
					{links.hasVimeo && 
						<Tooltip title="Go to Vimeo" color={"black"} >
							<A href={links.hasVimeo} target="_blank">
								<IconVimeoColor/>
							</A>
						
						</Tooltip>
					}
					{links.hasYoutube && 
						<Tooltip title="Go to YouTube" color={"black"} >
							<A href={links.hasYoutube} target="_blank">
								<IconYoutubeColor/>
							</A>
						
						</Tooltip>
					}
					{links.hasSpotify && 
						<Tooltip title="Go to Spotify" color={"black"} >
							<A href={links.hasSpotify} target="_blank">
								<IconSpotifyColor/>
							</A>
						
						</Tooltip>}
					{links.hasPDF && 
						<Tooltip title="See PDF" color={"black"} >
							<A href={links.hasPDF} target="_blank">
								<IconPDF/>
							</A>
						
						</Tooltip>
					}
				</Div>
			)}
		</div>
	)
}



export default PortfolioIconsDisplay