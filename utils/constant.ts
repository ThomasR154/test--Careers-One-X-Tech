import { I_Detail, I_DropdownMenu, I_Language } from "./interface";

export const languageOptions: I_Language[] = [
  { value: "sg", label: "Singapore" },
  { value: "en", label: "English" },
  { value: "de", label: "German" },
];
export const menus1: I_DropdownMenu[] = [
  {
    title: "Find Ev Cars",
    url: "/",
  },
  {
    title: "contact",
    url: "/",
  },
  {
    title: "More",
    url: "/",
  },
];

export const menus2: I_DropdownMenu[] = [
  {
    title: "EV Guides",
    url: "/",
  },
  {
    title: "ABC",
    url: "/",
  },
  {
    title: "About us",
    url: "/",
  },
];
export const exteriors: I_Detail[] = [
  {
    title: "Body Style",
    content: "Hatchback",
  },
  {
    title: "Exterior Color",
    content: "Blue",
  },
  {
    title: "Length",
    content: "175”",
  },
  {
    title: "Wheelbase",
    content: "106”",
  },
  {
    title: "Width",
    content: "69.7”",
  },
  {
    title: "Full Width",
    content: "N/A",
  },
  {
    title: "Clearance",
    content: "6”",
  },
];
export const interiors: I_Detail[] = [
  { title: "Seating", content: "5 adults" },
  { title: "Interior Colour", content: "N/A" },
  { title: "Head Room Front", content: "41”" },
  { title: "Head Room Rear", content: "37”" },
  { title: "Leg Room Front", content: "42”" },
  { title: "Leg Room Rear", content: "33”" },
  { title: "Shoulder Room Front", content: "54”" },
];
export const performances: I_Detail[] = [
  { title: "Horsepower", content: "107 hp" },
  { title: "MPGe", content: "102" },
  { title: "Top Speed", content: "90 mph" },
];
export const charges: I_Detail[] = [
  { title: "Electric Range", content: "73 Mi." },
  { title: "Battery Size", content: "24 kWh" },
  { title: "Cost to charge (full)", content: "$2.50" },
];
