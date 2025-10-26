const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Use POST");

  let body = "";
  req.on("data", chunk => body += chunk);
  req.on("end", () => {
    try {
      const { url } = JSON.parse(body);
      if (!url) return res.status(400).send("URL é obrigatória");

      const filePath = path.join(process.cwd(), "storage.json");
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

      // gera slug aleatório de 6 caracteres
      let slug;
      do {
        slug = Math.random().toString(36).substring(2, 8);
      } while (data[slug]);

      // salva
      data[slug] = url;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      // retorna link curto
      res.status(200).json({ shortUrl: `https://seusite.vercel.app/${slug}` });
    } catch (err) {
      res.status(500).send("Erro no servidor");
    }
  });
};
