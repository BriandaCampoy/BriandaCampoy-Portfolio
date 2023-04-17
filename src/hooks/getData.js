export default async function getData(URL){
  const results = await fetch(URL)
  const data = await results.json();
  return data;
}