//import Image from "next/image";
import Header from "@/components/Header";
import { RecordTable } from "@/components/RecordTable";
import { WantlistRecord } from "@/lib/DiscogsInterfaces";
import localData from "@/localdata/localdata1.json";

export default function Home() {
	const records: WantlistRecord[] = localData.slice(0, 100);

	return (
		<>
			<Header />
			<section className="main">
				<div className="top">
					<h2>Total: {records ? records.length : "¯_(ツ)_/¯"}</h2>
				</div>

				<RecordTable itemList={records} />
			</section>
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
