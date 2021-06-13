import firebase, { database } from "../util/firebase.config";

let username = "unknown";

const storeImageUrl = (url: string) => {
  const randomNumber: number = new Date().getTime() + Math.floor(Math.random() * 100000);
  database.ref("/stories/" + randomNumber).set({
    url,
    username,
  });
};

export const firebaseUpload = (file: any, setProgress: any) => {
  const storage = firebase.storage();
  let uploadTask = storage.ref().child(`images/${file.name}`).put(file);
  uploadTask.on(
    "state_changed",
    (snapshort: any) => {
      const progress = Math.round((snapshort.bytesTransferred / snapshort.totalBytes) * 100);
      setProgress(progress);
      console.log(progress);
    },
    (error) => {
      console.log(error);
    },
    () =>
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log("File available at", downloadURL);
        storeImageUrl(downloadURL);
      })
  );
};

export const handleFilePreview = (file: any, setimage: any, setProgress: any) => {
  console.log(file);
  let fileType = file?.type;
  let validFileExtensions = ["image/jpeg", "image/jpg", "image/png"];

  if (validFileExtensions.includes(fileType) && file.size < 500000) {
    // 500KB
    setProgress(1);
    firebaseUpload(file, setProgress);
    let fileReader = new FileReader();
    fileReader.onload = () => setimage(fileReader.result);
    fileReader.readAsDataURL(file);
  } else {
    if (file.size > 200000) alert("Image Size Must be less than 200KB");
    else alert("Unsupported File Formate");
  }
};

export const handleChoosenFile = (e: any, setimage: any, setProgress: any, usname: string) => {
  const file = e.target.files[0];
  username = usname;
  handleFilePreview(file, setimage, setProgress);
};

export const handleUploadEvent = (fileRef: any) => {
  if (fileRef.current) {
    fileRef.current.click();
  }
};

export const handleDragOver = (e: any) => {
  e.preventDefault();
};

export const handleFileDrop = (e: any, setimage: any, setProgress: any) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  handleFilePreview(file, setimage, setProgress);
};
