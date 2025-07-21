import path from "path";
import fs from "fs";
import download from "image-downloader";

export const downloaderImage = async (Link, destination) => {
  try {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }

    const url = new URL(Link);
    const ext = path.extname(url.pathname).slice(1);
    const extension = ext || "jpg";
    const filename = `${Date.now()}.${extension}`;

    const destPath = path.join(destination, filename);
          
    const options = {
      url: Link,
      dest: destPath,
    };

    await download.image(options);
    console.log("Saved to", filename);
    return filename;
  } catch (error) {
    console.error("Erro ao baixar imagem:", error);
    throw error;
  }
};
export const deleteImage = (filename, destination) => {
  const filePath = path.join(destination, filename)}