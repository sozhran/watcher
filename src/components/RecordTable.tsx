import Image from "next/image";
import { WantlistRecord, Artist, Format } from "@/lib/DiscogsInterfaces";

interface RecordTableRowProps {
	item: WantlistRecord;
}

export interface RecordTableProps {
	itemList: WantlistRecord[];
}

const RecordTableRow = (props: RecordTableRowProps) => {
	const artist = props.item.basic_information.artists.map((artist: Artist) => artist.name).join(" / ");
	const format = props.item.basic_information.formats.map((format: Format) => format.name).join(" / ");

	return (
		<tr className="mb-1">
			<td>
				<Image src={props.item.basic_information.thumb} alt={props.item.basic_information.title} width={40} height={40} />
			</td>
			<td>
				{artist} - {props.item.basic_information.title}
			</td>
			<td>{format}</td>
			<td>{props.item.basic_information.year}</td>
			<td>{props.item.rating}</td>
		</tr>
	);
};

export const RecordTable = (props: RecordTableProps) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Cover</th>
					<th>Artist - Title (Label, Catalog)</th>
					<th>Format</th>
					<th>Year</th>
					<th>Rating</th>
				</tr>
			</thead>
			<tbody className="divide-neutral-950">
				{props.itemList.map((item: WantlistRecord) => {
					return <RecordTableRow key={`tr=${item.id}`} item={item} />;
				})}
			</tbody>
		</table>
	);
};

//body {
//	background-color: #d4d4d8;
//	display: flex;
//	flex-direction: column;
//	height: auto;
//	margin: auto;
//}

//.main {
//	margin: auto;
//}

//h1 {
//	font-size: 30px;
//	font-weight: 550;
//}

//.top {
//	display: flex;
//	flex-direction: column;
//	justify-content: center;
//	align-items: center;
//	height: 50px;
//	position: relative;
//}

//.collection {
//	margin-left: 20px;
//	display: flex;
//	flex-direction: row;
//	flex-wrap: wrap;
//	justify-content: start;
//	border: 2px solid black;
//	width: auto;
//}

//.cover-art-container {
//	position: relative;
//	min-height: 200px;
//	min-width: 200px;
//	max-height: 200px;
//	max-width: 200px;
//}

//.card {
//	max-height: 250px;
//	max-width: 200px;
//	border: 2px solid black;
//	align-items: center;
//	display: flex;
//	flex-direction: column;
//	justify-content: start;
//	overflow: hidden;
//}

//.small-card {
//	height: 50px;
//	width: 400px;
//	border: 1px solid black;
//	display: flex;
//	flex-direction: row;
//	overflow: hidden;
//}

//.record-table {
//	width: 100%;
//	margin: 10px;
//}

//.bg-odd {
//	background-color: grey;
//}

//.bg-even {
//	background-color: grey;
//}

//tr:hover {
//	background-color: #64748b;
//	background-color: charcoal-100;
//}
