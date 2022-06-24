import axios from "axios";

const fetchBookById = async (
  bookId: string | undefined,
  setBook: (response: Object) => void
) => {
  const response = await axios
    .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  setBook(response);
};

export default fetchBookById;
