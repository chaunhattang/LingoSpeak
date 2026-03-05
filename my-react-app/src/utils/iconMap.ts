import { IconType } from "react-icons/lib";

import {
  FaLeaf,
  FaGraduationCap,
  FaBuilding,
  FaPlane,
  FaHeart,
  FaUsers,
  FaLaptop,
  FaCloudSun,
  FaUtensils,
  FaCompass,
} from "react-icons/fa";

export const iconMap: Record<string, IconType> = {
  eco: FaLeaf,
  school: FaGraduationCap,
  "office-building": FaBuilding,
  travel: FaPlane,
  family: FaUsers,
  technology: FaLaptop,
  health: FaHeart,
  weather: FaCloudSun,
  food: FaUtensils,
  direction: FaCompass,
};
