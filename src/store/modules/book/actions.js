import Book from "../../../apis/Book";

export const getBooks = ({ commit }) => {
  Book.all().then((response) => {
    commit("SET_BOOKS", response.data);
  });
};

export const getBook = ({ commit }, productIsbn) => {
  Book.show(productIsbn).then((response) => {
    commit("SET_BOOK", response.data);
  });
};
