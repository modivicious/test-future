import axios from "axios";

import { notifyError } from "../notifications";

const fetchBookById = async (
  bookId: string | undefined,
  setBook: (response: Object) => void
) => {
  try {
    const response = await axios
      .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((res) => res.data);

    setBook(response);
  } catch (err) {
    notifyError(err);
  }
};

export default fetchBookById;
