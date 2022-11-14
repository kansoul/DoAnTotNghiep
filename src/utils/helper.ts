export const loadScript = function (src: any) {
  var tag = document.createElement("script");
  tag.async = false;
  tag.src = src;
  document.getElementsByTagName("body")[0].appendChild(tag);
};
