import Image from "next/image";

export default function Footer() {
	return (
		<div className="flex bg-neutral-300 justify-center items-center h-[40px] w-[100%] mt-[40px]">
			<a href="https:/github.com/sozhran/wantlister" target="_blank">
				<Image alt="github share icon" src="https://i.imgur.com/5Qr1cEC.png" width={25} height={25} />
			</a>
		</div>
	);
}

//.footer {
//	position: fixed;
//	bottom: 0;
//	display: flex;
//	justify-content: center;
//	height: 40px;
//	width: 100%;
//}
