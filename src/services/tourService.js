export async function getTours(page, limit) {
  const res = await fetch(
    `http://localhost:5000/api/tours?page=${page}&limit=${limit}`
  );
  return res.json();
}
