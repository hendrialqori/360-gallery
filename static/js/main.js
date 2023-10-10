const ORIGIN = "http://103.140.90.118:8000";

let isLoading = false;

const images_container = document.querySelector(".images__body");

const renderImages = (data) => {
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

    if (success) {
      data.forEach((image) => {
        renderImages(image);
      });
    }

    isLoading = false;
  } catch (error) {
    isLoading = false;
    throw new Error(error);
  }
};

// setInterval(useGetImages,)

useGetImages();

