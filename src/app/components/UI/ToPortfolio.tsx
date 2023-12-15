import { FC } from 'react';
import styled, { css } from "styled-components"
import styleSystem from '../styleSystem';
import { IconArrowPortfolio } from '../Icons/Icons';

const ToPortfolioWrapper = styled.div`
	position: absolute;
	bottom:4rem;
	right: 4rem;
	z-index: 99;
	cursor: pointer;
`;

interface ToPortfolioProps {
	onClick: () => void;
}

export const ToPortfolio: FC<ToPortfolioProps> = ({ onClick }) => {

	return (
		<ToPortfolioWrapper onClick={onClick}>
			<IconArrowPortfolio />
		</ToPortfolioWrapper>
	)
}

