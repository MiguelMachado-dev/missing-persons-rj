import type { ApiResponse, MissingPersonDetail } from "../types";

export const fetchMissingPersons = async (
  page: number,
  pageSize: number,
  search?: string
): Promise<ApiResponse> => {
  let url = `https://desaparecidos-api.pcivil.rj.gov.br/missings?pageSize=${pageSize}&pageStart=${page}&isFound=false&isDead=false`;
  if (search) url += `&name=${encodeURIComponent(search)}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Erro ao buscar dados");
  return response.json();
};

export const fetchMissingPersonDetail = async (
  id: number
): Promise<MissingPersonDetail> => {
  const response = await fetch(
    `https://desaparecidos-api.pcivil.rj.gov.br/missings/${id}`
  );
  if (!response.ok) throw new Error("Erro ao buscar detalhes");
  return response.json();
};

export const fetchEyeColors = async (): Promise<
  { id: number; desc: string }[]
> => {
  const response = await fetch(
    "https://desaparecidos-api.pcivil.rj.gov.br/domains/eye-color"
  );
  if (!response.ok) throw new Error("Erro ao buscar cores dos olhos");
  return response.json();
};

export const fetchSkinColors = async (): Promise<
  { id: number; desc: string }[]
> => {
  const response = await fetch(
    "https://desaparecidos-api.pcivil.rj.gov.br/domains/skin-color"
  );
  if (!response.ok) throw new Error("Erro ao buscar cores da pele");
  return response.json();
};

export const fetchHairColors = async (): Promise<
  { id: number; desc: string }[]
> => {
  const response = await fetch(
    "https://desaparecidos-api.pcivil.rj.gov.br/domains/hair-color"
  );
  if (!response.ok) throw new Error("Erro ao buscar cores do cabelo");
  return response.json();
};
