import Image from "next/image";
import { WantlistRecord, Artist, Format, Label } from "@/lib/DiscogsInterfaces";

interface RecordTableRowProps {
	item: WantlistRecord;
	index: number;
}

export interface RecordTableProps {
	itemList: WantlistRecord[];
}

const ratingStars = (rating: number): string => {
	return "★".repeat(rating) + "☆".repeat(5 - rating);
};

const RecordTableHeader = () => {
	return (
		<thead className="text-center">
			<tr>
				<th className="fixed-col-1"></th>
				<th className="fixed-col-2">Artist - Title (Label, Catalog)</th>
				<th className="fixed-col-3">Format</th>
				<th className="fixed-col-4">Year</th>
				<th className="fixed-col-5">Rating</th>
				<th className="fixed-col-6">id</th>
			</tr>
		</thead>
	);
};

const RecordTableRow = (props: RecordTableRowProps) => {
	const artist = props.item.basic_information.artists.map((artist: Artist) => artist.name).join(" / ");
	const format = props.item.basic_information.formats.map((format: Format) => format.name).join(" / ");
	const label = [...new Set(props.item.basic_information.labels.map((label: Label) => label.name))].join(", ");
	const catno = [...new Set(props.item.basic_information.labels.map((label: Label) => label.catno))].join(", ");

	return (
		<tr className={`${props.index % 2 === 0 ? "bg-even" : "bg-odd"}`}>
			<td>
				<div className="flex justify-center">
					<Image
						src={props.item.basic_information.thumb}
						alt={props.item.basic_information.title}
						width={36}
						height={36}
						style={{ border: "1px solid black" }}
					/>
				</div>
			</td>
			<td>
				{artist} - {props.item.basic_information.title} ({label} - {catno})
			</td>
			<td>{format}</td>
			<td>{props.item.basic_information.year}</td>
			<td>{ratingStars(props.item.rating)}</td>
			<td>
				<a href={`https://www.discogs.com/release/${props.item.id}`} target="_blank">
					{props.item.id}
				</a>
			</td>
		</tr>
	);
};

export const RecordTable = (props: RecordTableProps) => {
	return (
		<table>
			<RecordTableHeader />
			<tbody>
				{props.itemList.map((item: WantlistRecord, index: number) => {
					return <RecordTableRow key={`tr=${item.id}`} item={item} index={index} />;
				})}
			</tbody>
		</table>
	);
};

//h1 {
//	font-size: 30px;
//	font-weight: 550;
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
