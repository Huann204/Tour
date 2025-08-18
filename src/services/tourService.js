export async function getTours() {
  const res = await fetch("http://localhost:5000/api/tours");
  return res.json();
}
