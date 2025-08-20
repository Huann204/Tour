export async function DetailTour(code) {
  const res = await fetch(`http://localhost:5000/api/tours/${code}`);
  return res.json();
}
