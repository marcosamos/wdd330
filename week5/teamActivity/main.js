import Hikes from "./hiking-start.js";

const hikes = new Hikes("hikes");

window.addEventListener("load", () => {
    hikes.showHikeList();
})

