import { getUniqueId, readLocalStorage, writeLocalStorage } from "../global.js";

export class photo {
  constructor(title, description, image) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.id = getUniqueId();
  }
  savePhoto() {
    const photo = {
      title: this.title,
      description: this.description,
      image: this.image,
      id: this.id,
    };
    const photos = getPhotos(); //recibe un json con los datos ingresados o recibe un array nulo
    photos.push(photo);
    writeLocalStorage("photos", JSON.stringify(photos)); //Transforma el array en un string y lo guarda en el localStorage
  }
}

export const getPhotos = () => {
  if (readLocalStorage("photos")) {
    const photos = readLocalStorage("photos");
    return JSON.parse(photos); //JSON(string) a un objeto de javascript que puedo manupular
  } else {
    return [];
  }
};
