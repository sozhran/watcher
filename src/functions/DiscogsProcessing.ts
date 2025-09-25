import { WantlistRecord, WantlistResponse } from "@/lib/DiscogsInterfaces";

const discogsUrl = "https://api.discogs.com/users/sozhran/wants";
const token = process.env.DISCOGS_TOKEN;
//const key = process.env.NEXT_PUBLIC_CONSUMER_KEY;
//const secret = process.env.NEXT_PUBLIC_CONSUMER_SECRET;

export async function getDiscogsWants(pageLimit: number) {
  if (!token) {
    return;
  }

  const wants: WantlistRecord[] = [];

  for (let i = 1; i < pageLimit; i++) {
    const response = await fetch(`${discogsUrl}` + `?page=${i.toString()}&per_page=100&sort=rating&sort_order=desc&token=${token}`, { method: "GET", headers: {} });
    const data = (await response.json()) as WantlistResponse;

    if (data.wants) {
      wants.push(...data.wants)
    }
  }

  return wants;
}



//export function cookDiscogsInfo(data: WantlistRecord[]) {
//  const processedData: object[] = [];

//  data.map((item: WantlistRecord) => {
//    const processedItem = {
//      id: item.id,
//      //"artist_id": item.basic_information.artists.map
//      artist: item.basic_information.artists.map((artist) => artist.name).join(" / "),
//      album: item.basic_information.title,
//      year: item.basic_information.year,
//    };

//    processedData.push(processedItem);
//  });

//  return processedData;
//}
