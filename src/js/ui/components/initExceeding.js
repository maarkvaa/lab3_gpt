import exceedingData from "../../mockData/exceedingData.js";
import { exceedingTemplate } from "../templates/exceedingTemplate.js";

const initExceeding = (exceedingNode) => {
  exceedingNode.insertAdjacentHTML("beforeend", exceedingTemplate(exceedingData));
};
export default initExceeding;