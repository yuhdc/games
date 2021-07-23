//MEdia resize

export const smallImage = (imagePath, size) => {
  //regurlation express find and exact media and /screenshots. \ mean find exact
  if (imagePath) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
    return image;
  }
  return imagePath;
};
