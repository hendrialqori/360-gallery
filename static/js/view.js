const ORIGIN = ""; //http://103.140.90.118:8000

let isLoading = false;

const query = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const value = query.image_id;

const getImageById = async () => {
  isLoading = true;
  try {
    const request = await fetch(`${ORIGIN}/api/photo/${value}`);

    const response = await request.json();

    const { success, data, message } = response;

    if (success) {
      initPanorama(`${ORIGIN}${data.file_path}`);
    }

    isLoading = false;
  } catch (error) {
    isLoading = false;
    console.log(error);
    throw new Error(error);
  }
};

const initPanorama = (imageUrl) => {
  pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: imageUrl,
    autoLoad: true,
  });
};

getImageById();
