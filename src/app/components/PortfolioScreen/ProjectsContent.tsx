import { FC } from 'react';
import {
	BodyName,
	BodyInfo,
	BodyImgWrapper,
	BodyInfoText,
	BodyInfoData,
	BodyInfoDataKey,
	BodyInfoDataValue,
	BodyInfoDataGroup,
	BodyInfoDataBullet,
	BodyInfoDataRow,
	GridContent,
} from './PortfolioScreenV2.styled';


interface ProjectsContentProps {
	thisProject:{
		projectName: string,
		description: string,
		info: {
			year: string,
			typeOfWork: string,
			industry: string,
		},
		tags: string[],
		imgs: string[],
		link?: string,
		videoVimeo?: string,
		videoYoutube?: string
	}
}

const ProjectsContent: FC<ProjectsContentProps> = ({ thisProject:{ projectName, description, info, tags, imgs }}) => {
	
	const uniqueKey = `project_${projectName.replace(/\s+/g, '-')}`;


	return(
		<GridContent key={uniqueKey}>
			{/* Project Title */}
			<BodyName
				initial={{ opacity: 0, x: "-1rem" }}
				whileInView={{ opacity: 1, x: "0rem" }}
				transition={{ duration: 1, }}>
				{projectName}
			</BodyName>



			<BodyInfo>

				{/* Project description */}
				<BodyInfoText 
					initial={{ opacity: 0, x: "-1rem" }}
					whileInView={{ opacity: 1, x: "0rem" }}
					transition={{ duration: 1, delay: .2 }}>
					<p>	{description}	</p>
				</BodyInfoText>


				{/* Project Data */}
				<BodyInfoData>

					<BodyInfoDataRow
						initial={{ opacity: 0, x: "-1rem" }}
						whileInView={{ opacity: 1, x: "0rem" }}
						transition={{ duration: 1, delay: .4 }}>

						<BodyInfoDataGroup 
							initial={{ opacity: 0, x: "-1rem" }}
							whileInView={{ opacity: 1, x: "0rem" }}
							transition={{ duration: 1, }}>
							<BodyInfoDataKey>
								{"Industry"}
							</BodyInfoDataKey>
							<BodyInfoDataValue>
								{info.industry}
							</BodyInfoDataValue>
						</BodyInfoDataGroup>

						<BodyInfoDataGroup
							initial={{ opacity: 0, x: "-1rem" }}
							whileInView={{ opacity: 1, x: "0rem" }}
							transition={{ duration: 1, }}>
							<BodyInfoDataKey>
								{"Type of work"}
							</BodyInfoDataKey>
							<BodyInfoDataValue>
								{info.typeOfWork}
							</BodyInfoDataValue>
						</BodyInfoDataGroup>

						<BodyInfoDataGroup 
							isFirst={true}
							initial={{ opacity: 0, x: "-1rem" }}
							whileInView={{ opacity: 1, x: "0rem" }}
							transition={{ duration: 1, }}>
							<BodyInfoDataKey>
								{"Year"}
							</BodyInfoDataKey>
							<BodyInfoDataValue>
								{info.year}
							</BodyInfoDataValue>
						</BodyInfoDataGroup>
					
					</BodyInfoDataRow>


					<BodyInfoDataRow
						initial={{ opacity: 0, x: "-1rem" }}
						whileInView={{ opacity: 1, x: "0rem" }}
						transition={{ duration: 1, delay: .6 }}>
						{/* Project Tags */}
						<BodyInfoDataGroup
							initial={{ opacity: 0, x: "-1rem" }}
							whileInView={{ opacity: 1, x: "0rem" }}
							transition={{ duration: 1, }}>
							<BodyInfoDataKey>
								{"Tags"}
							</BodyInfoDataKey>
							<BodyInfoDataValue>
								{tags.map((tag, index) => (
									<BodyInfoDataBullet 
										tagColor={index} 
										key={index}
										initial={{ opacity: 0, x: "-1rem" }}
										whileInView={{ opacity: 1, x: "0rem" }}
										transition={{ duration: 1, delay: index / 5 }}>
											{tag}
									</BodyInfoDataBullet>
								))}
							</BodyInfoDataValue>
						</BodyInfoDataGroup>
					</BodyInfoDataRow>

				</BodyInfoData>


			</BodyInfo>

			<BodyImgWrapper
				initial={{ opacity: 0, x: "-1rem" }}
				whileInView={{ opacity: 1, x: "0rem" }}
				transition={{ duration: 1, delay: .6}}>
				{/* Imagen (o carousel) del projecto */}
				
				{imgs.map((img, index) => (
					<div key={index}>
						{img}
					</div>
				))}
			</BodyImgWrapper>
		</GridContent>
	)
}

export default ProjectsContent