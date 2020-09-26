const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin(["../static/Photos/*.png"], {
  destination: "../static/Photos/webp/",
  plugins: [
    imageminWebp({
      quality: 100
    }),
  ],
}).then(() => {
  console.log("Images Converted");
});