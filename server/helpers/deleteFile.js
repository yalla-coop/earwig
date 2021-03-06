const { admin } = require("../services/firebase");
const config = require("../config");

module.exports = fileName => new Promise(async (resolve, reject) => {
  try {
    const bucket = admin.storage().bucket();

    if (config.env === "test") {
      return resolve();
    }

    const [exists] = await bucket
      .file(fileName)
      .exists();

    if (!exists) {
      throw new Error("file is no longer available");
    }

    await bucket
      .file(fileName)
      .delete();

    return resolve();
  } catch (error) {
    return reject(error);
  }
});
