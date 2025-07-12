export const downloaderImage = async (Link, destination) => {
  const extension = mime.extension(Link);
  const filename = `${Date.now()}.${extension}`;

  const options = {
    url: Link,
    dest: `${destination}/${filename}`, // <- aqui adicionei uma `/` só por segurança cross-platform
  };

  try {
    await download.image(options);
    console.log("Saved to", filename);
    return filename;
  } catch (error) {
    console.error("Erro ao baixar imagem:", error);
    throw error;
  }
};
