export interface I_CarBadge {
  name: string;
  color: string;
  backgroundColor: string;
}
export interface I_CarInfo {
  model: string;
  serialHeader: string;
  serialNumber: string;
  rating: number;
  badges: I_CarBadge[];
}
export interface I_Language {
  value: string;
  label: string;
}
export interface I_DropdownMenu {
  title: string;
  url: string;
}
export interface I_Detail {
  title: string;
  content: string;
}
export interface I_Price {
  color: string;
  price: number;
  name: string;
}
