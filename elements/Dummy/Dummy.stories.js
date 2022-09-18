/* eslint-disable import/no-anonymous-default-export */
import Sizes from "../Sizes"

import Dummy from "./Element"

export default {
    component: Dummy,
}

export const DummyStory = (args) => (
    <Sizes>
        <Dummy {...args} />
    </Sizes>
)

DummyStory.args = {
    text: "Demo",
    height: 100,
    color: "#171717"
};