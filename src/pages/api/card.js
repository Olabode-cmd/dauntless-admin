import Server  from "./lib/service";

export default async function checkRate(res) {
  const cards = await Server.get("/card");
  res.status(200).json(cards);
}