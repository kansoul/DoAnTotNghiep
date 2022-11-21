export const loadScript = function (src: any) {
  var tag = document.createElement("script");
  tag.async = false;
  tag.src = src;
  document.getElementsByTagName("body")[0].appendChild(tag);
};

export const removeSameObject = (arr: any) => {
  const result = arr.reduce((unique, o) => {
    if (!unique.some((obj) => obj.label === o.label && obj.value === o.value)) {
      unique.push(o);
    }
    return unique;
  }, []);
  return result;
};
