import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {

    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    const decodedData;

    if(token && isCustomAuth) {
        decodedData = jwt.verify(token, "test");
        res.userId = decodedData?.id;
    } else {
        decodedData = jwt.decode(token);
        res.userId = decodedData?.sub
    }

    next();

  } catch (error) {
    console.log(error);
  }
};


export default auth;