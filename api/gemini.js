export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { model, body } = req.body;
  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
  );
  const data = await geminiRes.json();
  return res.status(geminiRes.status).json(data);
}
