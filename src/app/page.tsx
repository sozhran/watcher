//import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RecordTable } from "@/components/RecordTable";
import { WantlistRecord } from "@/lib/DiscogsInterfaces";
import localData from "@/localdata/localwants.json";

export default function Home() {
	const records: WantlistRecord[] = localData.slice(0, 100);

	return (
		<>
			<Header />
			<section className="flex flex-col justify-center items-center m-auto gap-[20px]">
				<h2>Total records: {records ? records.length : "¯_(ツ)_/¯"}</h2>

				<RecordTable itemList={records} />
			</section>
			<Footer />
		</>
	);
}

// BATTLEPLAN
// import basic Discogs data without auth by button
// add auth
// map basic data and cook list of rated records
// request marketplace for these records, display on page
// improved display, art, distinguish by date/time
// ...
// add database
