export type MissingPerson = {
  id: number;
  name: string;
  age: number;
  photo: string;
  isSocialPic: boolean;
  isFound: boolean;
  isDead: boolean;
};

export type MissingPersonDetail = {
  id: number;
  name: string;
  mother: string;
  father: string | null;
  age: number;
  eyeColor: number | null;
  hairColor: number | null;
  skinColor: number | null;
  scar: string | null;
  tattoo: string | null;
  clothing: string | null;
  placeOfDisappearance: string;
  dateOfDisappearance: string;
  obs: string | null;
  photo: string;
  isSocialPic: boolean;
  isFound: boolean;
  isDead: boolean;
  isActive: boolean;
  createdBy: number;
  createdAt: string;
  updatedBy: number | null;
  updatedAt: string | null;
  idSCO: number | null;
};

export type ApiResponse = {
  content: MissingPerson[];
  totalRecords: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
};
