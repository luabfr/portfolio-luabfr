import React, { useState } from 'react';
import { 
	Grid, 
	GridIndex, 
	ProjectsTitle,
	ProjectsAllProjects,
	ShowList,
	X,
} from './PortfolioScreenV2.styled';
import ProjectsIndexUL from './ProjectsIndexUL';
import ProjectsContent from './ProjectsContent';
import { projects, projectsContent } from './_projects';
import { useDispatch, useSelector } from 'react-redux';
import { updateProjectInView } from '@/app/store/uiStates';
import { storeTypes } from '@/app/store/interfaces';
import { projectMarketFinder } from './_projects';
import PortfolioHome from '../PortfolioHome/PortfolioHome';
import { IconBurgerBG } from './PortfolioScreenV2.styled';



const PortfolioScreenV2 = () =>{
	const	[isShowListOpen, setIsShowListOpen] = useState(false)
	const projectInView = useSelector((state: storeTypes) => state.uiStates.projectInView);
	const dispatch = useDispatch();
	// const projectInView = useSelector((state: storeTypes) => state.uiStates.projectInView);

	const goToView = (viewName: string) => {
		dispatch(updateProjectInView(viewName));
	}

	// Función para buscar el proyecto correspondiente
	const findProject = () => {
		const selectedProject = projectsContent.find(
			(project) => project.projectName === projectInView
		);
		return selectedProject;
	};

	const selectedProject = findProject();

	const justForSecurityProject = projectMarketFinder

		

	const showListOpenHandler = ()=>{
		setIsShowListOpen(!isShowListOpen)
		console.log('click:', isShowListOpen)
	}

	return(
		
		<Grid>

			<IconBurgerBG />

			{/* Projects Index */}
			{/* Projects Index */}
			<GridIndex>
				<ProjectsTitle>					
					<h1 onClick={() => goToView("PortfolioHome")}>Portfolio</h1>
					<hr/>					
				</ProjectsTitle>
				
				<ProjectsAllProjects isOpen={isShowListOpen} onClick={showListOpenHandler}>
					<ShowList >
						See Projects
						<X isOpen={isShowListOpen} />
					</ShowList>
					{projects.map((project, index) => (
						<ProjectsIndexUL
							subtitle={project.category}
							projectsName={project.projectsList} 
							key={index}
							ulIndex={index}/>
					))}
				</ProjectsAllProjects>

			</GridIndex>


			{/* Portfolio - Home */}
			{projectInView == "PortfolioHome" &&		
				<PortfolioHome />
			}
			

			{/* Portfolio - Projects */}
			{projectInView !== "PortfolioHome" &&
				<ProjectsContent thisProject={selectedProject == undefined ? justForSecurityProject : selectedProject} />				
			}

				
		</Grid>
	)
}


export default PortfolioScreenV2