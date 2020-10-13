const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  const files = await imagemin(['../static/Photos/**/*.{png,jpg}'], {
    destination: '../static/Photos/webp/',
    plugins: [
      imageminWebp({
        quality: 80,
      }),
    ],
  });
  console.log(files);
})();
