export default async function handler(req, res) {
  const { code, name, number } = req.query;

  if (!code || !name || !number) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // This is where the REAL bot logic will eventually go.

  return res.json({
    ok: true,
    message: `Pretend bot #${number} (${name}) joined game ${code}`
  });
}
