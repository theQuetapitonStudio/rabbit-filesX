const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const filePath = path.join(process.cwd(), "data.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const slug = req.query.slug;
  const destino = data[slug];

  if (destino) {
    res.writeHead(302, { Location: destino });
    res.end();
  } else {
    res.status(404).send("❌ Link não encontrado");
  }
};
