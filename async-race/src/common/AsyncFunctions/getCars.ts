import { url , Path } from "./vars";


export async function getCars() {
  try{
    const res = await fetch(`${url}${Path.garage}`);
    const items = await res.json();
    return items;
  catch(err){
    console.log(err);
  }
}
