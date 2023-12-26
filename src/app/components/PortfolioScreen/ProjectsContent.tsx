import { FC } from 'react';
import {
	BodyName,
	BodySubtitle,
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
import { ProjectsContentProps } from './PortfolioInterfaces';
import PortfolioIconsDisplay from '../PortfolioIconsDisplay/PortfolioIconsDisplay';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PortfolioImages from '../PortfolioImages/PortfolioImages';




const ProjectsContent: FC<ProjectsContentProps> = ({ thisProject:{ projectName,projectSubtitle, description, info, tags, imgs, links }}) => {
	
	const uniqueKey = `project_${projectName.replace(/\s+/g, '-')}`;


	return(
		<GridContent key={uniqueKey}>
			
			{/* Project Title */}
			<BodyName
				initial={{ opacity: 0, x: "-1rem" }}
				animate={{ opacity: 1, x: "0rem" }}
				transition={{ duration: 1, }}>
				{projectName}
			</BodyName>
			<BodySubtitle
				initial={{ opacity: 0, x: "-1rem" }}
				animate={{ opacity: 1, x: "0rem" }}
				transition={{ duration: 1, }}>
				{projectSubtitle}
			</BodySubtitle>



			<BodyInfo>

				{/* Project description */}
				<BodyInfoText 
					initial={{ opacity: 0, x: "-1rem" }}
					animate={{ opacity: 1, x: "0rem" }}
					transition={{ duration: 1, delay: .2 }}>
					{description}
				</BodyInfoText>


				{/* Project Data */}
				 {/* <BodyInfoData> */}
					{/*
					<BodyInfoDataRow
						initial={{ opacity: 0, x: "-1rem" }}
						animate={{ opacity: 1, x: "0rem" }}
						transition={{ duration: 1, delay: .4 }}> */}

						{/* Year */}
						{/* <BodyInfoDataGroup
							isFirst={true}
							initial={{ opacity: 0, x: "-1rem" }}
							animate={{ opacity: 1, x: "0rem" }}
							transition={{ duration: 1, }}>
							<BodyInfoDataKey>
								{"Year"}
							</BodyInfoDataKey>
							<BodyInfoDataValue>
								{info.year}
							</BodyInfoDataValue>
						</BodyInfoDataGroup> */}

						{/* Industry */}
						{/* <BodyInfoDataGroup 
							initial={{ opacity: 0, x: "-1rem" }}
							animate={{ opacity: 1, x: "0rem" }}
							transition={{ duration: 1, }}>
							<BodyInfoDataKey>
								{"Industry"}
							</BodyInfoDataKey>
							<BodyInfoDataValue>
								{info.industry}
							</BodyInfoDataValue>
						</BodyInfoDataGroup> */}

						{/* Type of Work */}
						{/* <BodyInfoDataGroup
							initial={{ opacity: 0, x: "-1rem" }}
							animate={{ opacity: 1, x: "0rem" }}
							transition={{ duration: 1, }}>
							<BodyInfoDataKey>
								{"Type of work"}
							</BodyInfoDataKey>
							<BodyInfoDataValue>
								{info.typeOfWork}
							</BodyInfoDataValue>
						</BodyInfoDataGroup>

						
					
					</BodyInfoDataRow> */}


					<BodyInfoDataRow
						initial={{ opacity: 0, x: "-1rem" }}
						animate={{ opacity: 1, x: "0rem" }}
						transition={{ duration: 1, delay: .6 }}>

						{/* Links To */}
						<BodyInfoDataGroup
							isFirst={true}
							initial={{ opacity: 0, x: "-1rem" }}
							animate={{ opacity: 1, x: "0rem" }}
							transition={{ duration: 1, }}>
							<BodyInfoDataKey>
								{"Links to"}
							</BodyInfoDataKey>
							<PortfolioIconsDisplay links={links} />
						</BodyInfoDataGroup>

						{/* Tags */}
						<BodyInfoDataGroup
							initial={{ opacity: 0, x: "-1rem" }}
							animate={{ opacity: 1, x: "0rem" }}
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
										animate={{ opacity: 1, x: "0rem" }}
										transition={{ duration: 1, delay: index / 5 }}>
											{tag}
									</BodyInfoDataBullet>
								))}
							</BodyInfoDataValue>
						</BodyInfoDataGroup>

					</BodyInfoDataRow>


				{/* </BodyInfoData> */}


			</BodyInfo>

			<BodyImgWrapper
				initial={{ opacity: 0, x: "-1rem" }}
				animate={{ opacity: 1, x: "0rem" }}
				transition={{ duration: 1, delay: .6}}>

				{/* Imagen (o carousel) del projecto */}
				<PortfolioImages imgs={imgs}/>


			</BodyImgWrapper>
		</GridContent>
	)
}

export default ProjectsContent