import type { ElementSettings, ElementData } from "../types/Element"

import DummyType from "./Dummy"

const elements = {
    "dummy" : DummyType as ElementData,
    "test": DummyType as ElementData
}

export default elements as ElementSettings