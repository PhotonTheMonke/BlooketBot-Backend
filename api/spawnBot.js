export default async function handler(req, res) {
    const { code, name } = req.query;

    if (!code || !name) return res.status(400).json({ error: "Missing fields" });

    try {
        // Backend fetch to Blooket (replace with your real bot logic)
        const joinRes = await fetch("https://www.blooket.com/api/game/join", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: code, name })
        });

        const joinData = await joinRes.json();

        return res.json({ ok: true, message: `Bot "${name}" joined game ${code}` });
    } catch (e) {
        return res.status(500).json({ error: e.toString() });
    }
}
