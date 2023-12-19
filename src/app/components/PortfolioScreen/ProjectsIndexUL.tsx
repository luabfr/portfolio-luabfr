import { FC } from 'react';
import {
	ProjectsTitle,
	ProjectsAllProjects,
	ProjectsUL,
	ProjectsLI,
	ProjectsSubtitle,
	ProjectsName,
} from './PortfolioScreenV2.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateProjectInView } from '@/app/store/uiStates';
import { storeTypes } from '@/app/store/interfaces';


interface ProjectsIndexULProps {
	subtitle:string,
	projectsName: string[],
	ulIndex: number
}

const ProjectsIndexUL: FC<ProjectsIndexULProps> = ({ subtitle, projectsName, ulIndex }) => {

	const dispatch = useDispatch();
	// const projectInView = useSelector((state: storeTypes) => state.uiStates.projectInView);

	const goToView = (viewName: string) => {
		dispatch(updateProjectInView(viewName));
	}


	// console.log('projectInView', projectInView)

	return(
		<ProjectsUL
			initial={{ opacity: 0, y: "-1rem" }}
			whileInView={{ opacity: 1, y: "0rem" }}
			transition={{ duration: 1, delay: ulIndex / 5 }}>
			<ProjectsSubtitle>
				{subtitle}
			</ProjectsSubtitle>

			{projectsName.map((projectName, index) => (
				<ProjectsLI key={index}
					initial={{ opacity: 0, x: "-1rem" }}
					whileInView={{ opacity: 1, x: "0rem" }}
					transition={{ duration: 1, delay: index/5 }}>
					<ProjectsName onClick={() => goToView(projectName)}>
						{projectName}
					</ProjectsName>
				</ProjectsLI>
			))}

			
		</ProjectsUL>
	)
}

export default ProjectsIndexUL