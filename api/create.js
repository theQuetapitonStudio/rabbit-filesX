import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send("Use POST");

  try {
    const { url } = req.body || {};
    if (!url) return res.status(400).send("URL é obrigatória");

    // gerar slug aleatório de 6 caracteres
    let slug;
    do {
      slug = Math.random().toString(36).substring(2, 8);
    } while (await kv.exists(slug));

    // salvar slug -> url
    await kv.set(slug, url);

    // retorna link curto
    res.status(200).json({ shortUrl: `https://rabbit-files-x.vercel.app/${slug}` });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao criar link curto");
  }
}
