const vimeoClient = require("./client");

const getAlbumById = async (courseId) =>
  await vimeoClient(process.env.VIMEO_ACCESS_TOKEN)
    .request({
      method: "GET",
      path: `/albums/${courseId}`, // Use the album ID to get the showcase
    })
    .then((resp) => resp.body)
    .catch((error) => {
      throw new Error(error);
    });

module.exports = {
  getAlbumById,
};
