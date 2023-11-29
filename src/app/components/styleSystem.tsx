import { Sulphur_Point } from "next/font/google";
const sulphurPoint = Sulphur_Point({ weight: "400",subsets: ['latin'] });


const styleSystem = {
	primaryCol: "#C0B283",
	primaryCol2: "#EDDBCD",
	light: "#F4F4F4",
	dark: "#192231",
	semiDark: "#404A42",
	font1: sulphurPoint.style.fontFamily 
}

export default styleSystem