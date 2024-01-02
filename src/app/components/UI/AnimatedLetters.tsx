import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

interface TextReplacerProps {
	labels: string[];
	thisInterval: number;
}

const AnimatedLetters: React.FC<TextReplacerProps> = ({ labels, thisInterval }) => {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const controls = useAnimation();
	const [isHovered, setHovered] = useState(false);

	const animateLetters = () => {
		const letters = labels[currentTextIndex].split('');
		return letters.map((letter, index) => (
			<motion.span
				key={index}
				style={{ display: 'inline-block' }}
				initial={{ opacity: 0, y: -20 }}
				animate={isHovered ? { opacity: 1, y: 0, transition: { delay: index * 0.1 } } : { opacity: 0, y: -20 }}
			>
				{letter}
			</motion.span>
		));
	};

	const handleHover = (isHovering: boolean) => {
		setHovered(isHovering);
		setCurrentTextIndex((prevIndex) => (isHovering ? (prevIndex + 1) % labels.length : prevIndex));
		controls.start({ y: isHovering ? 0 : -20 });
	};

	return (
		<motion.div
			onHoverStart={() => handleHover(true)}
			onHoverEnd={() => handleHover(false)}
			initial={{ opacity: 0, y: -20 }}
			animate={controls}
			key={labels[currentTextIndex]}
		>
			{animateLetters()}
		</motion.div>
	);
};

export default AnimatedLetters;
