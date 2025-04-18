import { useQuery } from "@tanstack/react-query";
import {
  fetchMissingPersons,
  fetchMissingPersonDetail,
  fetchEyeColors,
  fetchSkinColors,
  fetchHairColors,
} from "../api";

export const useMissingPersons = (
  page: number,
  pageSize: number,
  search?: string
) =>
  useQuery({
    queryKey: ["missingPersons", page, pageSize, search],
    queryFn: () => fetchMissingPersons(page, pageSize, search),
    placeholderData: undefined,
  });

export const useMissingPersonDetail = (id: number | null) =>
  useQuery({
    queryKey: ["personDetail", id],
    queryFn: () => {
      if (id === null) throw new Error("ID cannot be null");
      return fetchMissingPersonDetail(id);
    },
    enabled: id != null,
  });

export const useEyeColors = () =>
  useQuery({
    queryKey: ["eyeColors"],
    queryFn: fetchEyeColors,
  });

export const useSkinColors = () =>
  useQuery({
    queryKey: ["skinColors"],
    queryFn: fetchSkinColors,
  });

export const useHairColors = () =>
  useQuery({
    queryKey: ["hairColors"],
    queryFn: fetchHairColors,
  });
