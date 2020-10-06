import { RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import {
  FaRegEnvelope,
  FaWordpress,
  FaCartArrowDown,
  FaCloudDownloadAlt,
  FaLanguage,
  FaPlane,
  FaChartPie,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn, 
  FaComment,
  FaBullhorn,
  FaUsers,
  FaMagic
} from "react-icons/fa";

export type IZipLoop = {
  [key: string]: any;
};

export interface IZippedItem {
  key: string;
  item: any;
  icon: any;
}

export function zipIcons<T>(propObj: IZipLoop, iconObj: IZipLoop) {
  let result: T = {} as T;
  for (const key in propObj) {
    Object.assign(result, {
      [key]: {
        item: propObj[key],
        icon: iconObj[key],
        key,
      },
    });
  }
  return Object.values(result);
}

export const contactIcons = {
  address: RiMapPinLine,
  phone: RiPhoneLine,
  email: FaRegEnvelope,
};

export const socialIcons = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  linkedIn: FaLinkedinIn,
};

export const serviceIcons = {
  wordPress: FaWordpress,
  cartArrowDown: FaCartArrowDown,
  cloud: FaCloudDownloadAlt,
  language: FaLanguage,
  plane: FaPlane,
  pieChart: FaChartPie,
};

export const featureIcons = {
  comment: FaComment,
  bullhorn: FaBullhorn,
  users: FaUsers,
  magic: FaMagic,
};
