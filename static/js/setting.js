const settingButton = document.querySelector(".gear-icon-wrapper");

const settingContainer = document.querySelector(".setting");

settingButton.addEventListener("click", function () {
  settingContainer.style.transform = "translateX(0px)";
  settingContainer.style.visibility = 'visible'
});

document.addEventListener("click", function (e) {
  const isClickInsideSetting = e.composedPath().includes(settingContainer);
  const isClickInsideButtonSetting = e.composedPath().includes(settingButton);

  if (!isClickInsideSetting && !isClickInsideButtonSetting) {
    settingContainer.style.transform = "translateX(300px)";
    settingContainer.style.visibility = 'hidden'
  }
});
