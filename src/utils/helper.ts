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

export const filterDiarys = (diary: any) => {
  const data = diary.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return data;
};

export const filterLastMessenger = (lastMessenger: any) => {
  const data = lastMessenger.sort(
    (a: any, b: any) =>
      new Date(b?.lastMessage?.sendAt?.toDate()).getTime() -
      new Date(a?.lastMessage?.sendAt?.toDate()).getTime()
  );
  return data;
};
export const handleNotifcationSound = () => {
  const audio: any = new Audio(
    "https://firebasestorage.googleapis.com/v0/b/chia-se-nhat-ki.appspot.com/o/mp3%2Fmessage.mp3?alt=media&token=d0ee91aa-3f9a-4286-8416-1fbb71bc25ff"
  );
  audio.play();
};
