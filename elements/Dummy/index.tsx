import type { ElementData } from "../../types/Element"
import Dialog from "./Dialog"
import Dummy from "./Element"

const DummyType = {
    dialog: Dialog,
    element: Dummy,
    default: {
        text: "Demo",
        height: 100,
        color: "#171717"
    }
} as ElementData

export default DummyType;