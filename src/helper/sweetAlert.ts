import { Timer } from "@mui/icons-material";
import Swal from "sweetalert2";

export const notify = (msg: string, icon: string) => {
  Swal.fire({
    title: "Todo App",
    text: msg,
    icon: icon,
    confirmButtonText: "Cool",
    timer: 300,
    timeProgressBar: true,
  });
};
