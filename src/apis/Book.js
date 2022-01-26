import Api from "./Api";

const END_POINT = "books";

export default {
  all() {
    return Api.get(END_POINT);
  },

  show(isbn) {
    return Api.get(`${END_POINT}/${isbn}`);
  },
};
