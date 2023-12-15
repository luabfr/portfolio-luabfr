import React, { useState } from 'react';
import { 
	Grid, 
	GridIndex, 
	ProjectsTitle,
	ProjectsAllProjects,
	ProjectsUL, 
	ProjectsLI,  
	ProjectsSubtitle,
	ProjectsName,
	GridContent,
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
	
} from './PortfolioScreenV2.styled';


const PortfolioScreenV2 = () =>{


	return(
		
		<Grid>

			{/* Projects List */}
			<GridIndex>
				<ProjectsTitle>
					<h1>Portfolio</h1>
					<hr/>
				</ProjectsTitle>
				
				<ProjectsAllProjects>
					<ProjectsUL>
						<ProjectsSubtitle>
							{"Code Challenges"}
						</ProjectsSubtitle>

						<ProjectsLI>
							<ProjectsName>
								{"Market Finder"}
							</ProjectsName>
						</ProjectsLI>
							
						<ProjectsLI>
							<ProjectsName>
								{"Historial Currencies Exchange"}
							</ProjectsName>
						</ProjectsLI>

						<ProjectsLI>
							<ProjectsName>
								{"Prject noname"}
							</ProjectsName>
						</ProjectsLI>
						{/* <hr /> */}
					</ProjectsUL>



					{/* UX/UI Design */}
					{/* UX/UI Design */}
					{/* UX/UI Design */}
					<ProjectsUL>
						<ProjectsSubtitle>
							{"UX/UI Design"}
						</ProjectsSubtitle>
						<ProjectsLI>

							<ProjectsName>
								{"Virtual Wallet"}
							</ProjectsName>
						</ProjectsLI>
							
						<ProjectsLI>
							<ProjectsName>
								{"Ranchapp"}
							</ProjectsName>
						</ProjectsLI>

						<ProjectsLI>
							<ProjectsName>
								{"Seacat (Buquebus)"}
							</ProjectsName>
						</ProjectsLI>
						{/* <hr /> */}
					</ProjectsUL>



					{/* Multimedial Craft Projects */}
					<ProjectsUL>
						<ProjectsSubtitle>
							{"Tangible Multimedia Interfaces"}
						</ProjectsSubtitle>

						<ProjectsLI>
							<ProjectsName>
								{"MIDI / Octo"}
							</ProjectsName>
						</ProjectsLI>

						<ProjectsLI>
							<ProjectsName>
								{"Improvi"}
							</ProjectsName>
						</ProjectsLI>

						<ProjectsLI>
							<ProjectsName>
								{"Envasadora + Noche de Museos (Gris) + Espejos Incierto"}
							</ProjectsName>
						</ProjectsLI>

						<ProjectsLI>
							<ProjectsName>
								{"Envasadora + Noche de Museos (Gris) + Espejos Incierto"}
							</ProjectsName>
						</ProjectsLI>

						<ProjectsLI>
							<ProjectsName>
								{"Envasadora + Noche de Museos (Gris) + Espejos Incierto"}
							</ProjectsName>
						</ProjectsLI>

						<ProjectsLI>
							<ProjectsName>
								{"Envasadora + Noche de Museos (Gris) + Espejos Incierto"}
							</ProjectsName>
						</ProjectsLI>
						{/* <hr /> */}
					</ProjectsUL>

				</ProjectsAllProjects>


			</GridIndex>


			{/* Body */}
			{/* Body */}
			{/* Body */}
			<GridContent>


				{/* Project Title */}
				<BodyName>
					{"MarketFinder"}
				</BodyName>



				<BodyInfo>

					{/* Project description */}
					<BodyInfoText>
						<p>	{"Aaca va una sub-grilla y orden. bloque de texto/lista de año, about, tech stack. Aca va una sub-grilla y orden. bloque de texto/lista de año, about, tech stack"}	</p>
						<p>{"Aaca va una sub-grill una sub-grilla y orden. bloque de texto/lista de año, about, tech stack"}	</p>
					</BodyInfoText>


					{/* Project Data */}
					<BodyInfoData>

						<BodyInfoDataRow>
							
							<BodyInfoDataGroup>
								<BodyInfoDataKey>
									{"Year"}
								</BodyInfoDataKey>
								<BodyInfoDataValue>
									{"2017"}
								</BodyInfoDataValue>
							</BodyInfoDataGroup>

							<BodyInfoDataGroup>
								<BodyInfoDataKey>
									{"Industry"}
								</BodyInfoDataKey>
								<BodyInfoDataValue>
									{"Internet"}
								</BodyInfoDataValue>
							</BodyInfoDataGroup>

							<BodyInfoDataGroup>
								<BodyInfoDataKey>
									{"Type of work"}
								</BodyInfoDataKey>
								<BodyInfoDataValue>
									{"Website"}
								</BodyInfoDataValue>
							</BodyInfoDataGroup>

							
						</BodyInfoDataRow>


						<BodyInfoDataRow>
						{/* Project Tags */}
							<BodyInfoDataGroup>
								<BodyInfoDataKey>
									{"Tags"}
								</BodyInfoDataKey>
								<BodyInfoDataValue>
									<BodyInfoDataBullet isGreen>{"#react1"}</BodyInfoDataBullet>
									<BodyInfoDataBullet isRed>{"#react2"}</BodyInfoDataBullet>
									<BodyInfoDataBullet isCyan>{"#react3"}</BodyInfoDataBullet>
									<BodyInfoDataBullet isOrange>{"#next"}</BodyInfoDataBullet>
									<BodyInfoDataBullet isYellow>{"#ant-design"}</BodyInfoDataBullet>
								</BodyInfoDataValue>
							</BodyInfoDataGroup>
						</BodyInfoDataRow>

					</BodyInfoData>
					

				</BodyInfo>

				<BodyImgWrapper>
				{/* Imagen (o carousel) del projecto */}
					<div > 
						aca foto del proyecto
					</div>
				</BodyImgWrapper>
				
			</GridContent>
		</Grid>
	)
}


export default PortfolioScreenV2