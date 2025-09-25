import Image from "next/image";
import Logo from "@/app/images/logo.png";

export default function Header() {
	return (
		<div key="header" className="flex justify-between items-center h-[80px] bg-amber-600 text-3xl text-black font-bold mb-[20px]">
			<div className="w-[40px] justify-center m-[20px]">
				<Image src={Logo} alt="logo" height={40} width={40} />
			</div>
			<div>
				<h1>WATCHER</h1>
			</div>
			<div className="w-[40px] justify-center m-[20px]"></div>
		</div>
	);
}
