const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3052;

app.use(cors());

// Root route (optional, just returns a message)
app.get("/", (req, res) => {
    res.send("Welcome to the Roblox Proxy Server!");
});

app.get("/proxy", async (req, res) => {
    let decalId = req.query.id;
    if (!decalId) {
        return res.status(400).json({ error: "Missing decal ID" });
    }

    let url = `https://thumbnails.roblox.com/v1/assets?assetIds=${decalId}&size=420x420&format=Png&isCircular=false`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching asset:", error);
        res.status(500).json({ error: "Failed to fetch asset" });
    }
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
