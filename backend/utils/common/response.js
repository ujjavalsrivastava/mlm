
const Response = (res, status, message, data) => {
  try {
    if (status === "error") {
      console.error(message);
      return res
        .status(500)
        .json({ status: "error", message: "Internal Server Error" });
    }

    if (status === "fail") {
      return res.status(200).json({ status: "fail", message: message });
    }

    if (status === "success") {
      if (data === undefined) data = null;
      return res
        .status(200)
        .json({ status: "success", message: message, payload: data });
    }

    if (status !== "success" && status !== "fail" && status !== "error") {
      console.error("status code not defined");
      return res
        .status(503)
        .json({ status: "error", message: "Internal Server Error" });
    }
  } catch (error) {
    console.error(error.message || error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};


module.exports = { Response};
