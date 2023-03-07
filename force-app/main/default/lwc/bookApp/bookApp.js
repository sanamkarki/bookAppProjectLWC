import { LightningElement } from "lwc";
const BOOK_API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
export default class BookAppLWC extends LightningElement {
  //  userTypedBookName = "man";
  dataHolder;
  changeHandler(event) {
    // this.userTypedBookName = event.target.value;
    // console.log("this is the typed value:", this.userTypedBookName);
    if (event.keyCode === 13) {
      this.fetchMethod(event.target.value);
    }
  }
  //adding comments
  connectedCallback() {
    this.fetchMethod();
  }
  fetchMethod(userTypedBookName) {
    // const url = BOOK_API_URL + this.userTypedBookName;
    // console.log("--------URL:", url);
    if (!!userTypedBookName) {
      fetch(BOOK_API_URL + userTypedBookName)
        .then(response => response.json())
        .then(data => {
          console.log("all the data items", data.items);
          console.log("all the data data", data);
          // this.imageData = data.items.imageLinks.smallThumbnail;
          // this.authorData = data.items.authors;
          this.dataHolder = data;
          console.log("Data holder", this.dataHolder);
          console.log("data value:", data.data.items.id);
          // console.log("this is id", data.items.accessInfo.id);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
