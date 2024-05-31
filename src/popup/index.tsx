import { createRoot } from "react-dom/client";
import Popup from "./Popup";
import "./index.css";

const container = document.getElementById("popup-root");
const root = createRoot(container!); // Use o operador "!" para garantir que o container não é null
root.render(<Popup />);
