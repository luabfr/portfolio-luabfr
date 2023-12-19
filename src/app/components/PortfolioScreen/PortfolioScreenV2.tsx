import React, { useState } from 'react';
import { 
	Grid, 
	GridIndex, 
	ProjectsTitle,
	ProjectsAllProjects,
} from './PortfolioScreenV2.styled';
import ProjectsIndexUL from './ProjectsIndexUL';
import ProjectsContent from './ProjectsContent';
import { projects, projectsContent } from './_projects';
import { useDispatch, useSelector } from 'react-redux';
import { updateProjectInView } from '@/app/store/uiStates';
import { storeTypes } from '@/app/store/interfaces';
import { projectMarketFinder } from './_projects';

const PortfolioScreenV2 = () =>{
	const projectInView = useSelector((state: storeTypes) => state.uiStates.projectInView);

	// Función para buscar el proyecto correspondiente
	const findProject = () => {
		const selectedProject = projectsContent.find(
			(project) => project.projectName === projectInView
		);
		return selectedProject;
	};

	const selectedProject = findProject();

	const justForSecurityProject = projectMarketFinder

	return(
		
		<Grid>

			{/* Projects Index */}
			{/* Projects Index */}
			<GridIndex>
				<ProjectsTitle>
					<h1>Portfolio</h1>
					<hr/>
				</ProjectsTitle>
				
				<ProjectsAllProjects>
					{projects.map((project, index) => (
						<ProjectsIndexUL
							subtitle={project.category}
							projectsName={project.projectsList} 
							key={index}
							ulIndex={index}/>
					))}
				</ProjectsAllProjects>

			</GridIndex>


			{/* Project Content */}
			{/* Project Content */}
			<ProjectsContent thisProject={selectedProject == undefined ? justForSecurityProject : selectedProject }	/>				
				
		</Grid>
	)
}


export default PortfolioScreenV2