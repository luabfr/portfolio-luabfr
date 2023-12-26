import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ImgTypes = {
	imgs: string[]
}

const PortfolioImages: FC<ImgTypes> =({ imgs })=>{
	return(
		<>
			{imgs.map((img, index) => (
				<motion.div key={index} style={{ width: '100%', maxWidth: '100%' }}>
					<div style={{ maxWidth: '100%', width: '100%', height: 'auto', position: 'relative', marginBottom: "2rem" }}>
						<Image
							src={`/img-portfolio/${img}`}
							alt={`Image ${index}`}
							layout="responsive"
							width={16}
							height={9}
						/>
					</div>
				</motion.div>

			))}
		</>
	)
}

export default PortfolioImages