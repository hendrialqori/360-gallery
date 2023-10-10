const ORIGIN = ""; //http://103.140.90.118:8000

let isLoading = false;

let existingImages = [];

const images_container = document.querySelector(".images__body");

const renderImages = (data) => {

  const a = document.createElement('a')


  let image = `
  <a href="view.html?image_id=${data.id}">
    <div class="image__wrapper">
    <img
      src="${ORIGIN}${data.file_path}"
      loading="lazy"
    />
  </a>
    </div>
  `;

  images_container.innerHTML += image;
};

const useGetImages = async () => {
  isLoading = true;
  try {
    const request = await fetch(`${ORIGIN}/api/photos`);

    const response = await request.json();

    const { success, data, message } = response;

    const uniqueImages = data.filter(
      (image) =>
        !existingImages.some((existingImage) => existingImage.id === image.id)
    );

    if (success) {
      uniqueImages.forEach((image) => {
        renderImages(image);
      });
    }

    existingImages.concat(uniqueImages);

    isLoading = false;
  } catch (error) {
    isLoading = false;
    throw new Error(error);
  }
};

// setInterval(useGetImages,5000)

useGetImages();
