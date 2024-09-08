const vimeoClient = require("../vimeo/client");
const { getAlbumById } = require("../vimeo/helper");
const Product = require("../models/product-model");
const { getUserId } = require("../utils/helper");
const UserPurchase = require("../models/purchase-history-model");

const getVideo = async (req, res) => {
  const { courseId } = req.query;
  const userId = getUserId(req);
  console.log(userId);
  const history = await UserPurchase.findOne({ userId }).populate(
    "products.product"
  );
  console.log(history, userId);
  const products = history?.products || [];

  const checkCourse = products.find(
    ({ product }) => product.courseId === courseId
  );
  if (!products.length || !checkCourse)
    return res.status(400).json({ error: "You haven't purchased this course" });

  vimeoClient(process.env.VIMEO_ACCESS_TOKEN).request(
    `/albums/${courseId}/videos`,
    (error, body, statusCode, headers) => {
      if (error) {
        console.error("Error fetching video details:", error);
        return res.json(error);
      }
      const { total, page } = body;
      const createVideoData = { total, page, data: [] };
      if (body.data && Array.isArray(body.data)) {
        body.data.forEach((item) => {
          createVideoData.data.push({
            uri: item.uri,
            name: item.name,
            description: item.description,
            link: item.link,
            duration: item.duration,
            player_embed_url: item.player_embed_url,
          });
        });
      }
      res.json(createVideoData);
    }
  );
};

const handleAuthentication = (req, res) => {
  res.json(
    vimeoClient().buildAuthorizationEndpoint(
      process.env.VIMEO_REDIRECT_URI,
      "public private create video_files"
    )
  );
};

const handleRedirection = async (req, res) => {
  const { code } = req.query;
  if (!code)
    return res.status(400).json({ error: "redirect code is required" });
  const result = await vimeoClient()
    .accessToken(code, process.env.VIMEO_REDIRECT_URI)
    .then((resp) => resp)
    .catch((error) => {
      throw new Error(error);
    });

  const accessToken = result.body.access_token;
  if (accessToken) {
    return res.json(result.body);
  }
  res.json(result);
};

const getAllCourses = async (req, res) => {
  const courses = await Product.find();
  if (courses.length) {
    const data = await Promise.all(
      courses.map(async ({ price, courseId, _id }) => {
        const course = await getAlbumById(courseId);
        if (course.error) return { courseId, price, error };
        return {
          id: _id,
          courseId,
          price,
          name: course.name,
          description: course.description,
          link: course.link,
          duration: course.duration,
          created_time: course.created_time,
          modified_time: course.modified_time,
          pictures: { ...course.pictures, sizes: {} },
        };
      })
    );
    return res.json(data);
  }
  res.json(courses);
};

module.exports = {
  getVideo,
  handleAuthentication,
  handleRedirection,
  getAllCourses,
};
