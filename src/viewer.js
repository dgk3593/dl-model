// @ts-nocheck
import { DLViewer } from "./dl-viewer";
const viewer = new DLViewer();
viewer.initData();
viewer.setViewport();

window.addEventListener("resize", () => viewer.setViewport());

window.viewer = viewer;
window.model = viewer.model;

export default viewer;
