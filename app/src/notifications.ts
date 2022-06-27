import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyError = (err) => toast.error(err.toString());
