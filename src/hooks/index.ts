import { useQuery } from "@tanstack/react-query";
import type { ApiResponse, MissingPersonDetail } from "../types";
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
  useQuery<ApiResponse, Error>({
    queryKey: ["missingPersons", page, pageSize, search],
    queryFn: () => fetchMissingPersons(page, pageSize, search),
    placeholderData: undefined,
  });

export const useMissingPersonDetail = (id: number | null) =>
  useQuery<MissingPersonDetail, Error>({
    queryKey: ["personDetail", id],
    queryFn: () => fetchMissingPersonDetail(id!),
    enabled: id != null,
  });

export const useEyeColors = () =>
  useQuery<{ id: number; desc: string }[], Error>({
    queryKey: ["eyeColors"],
    queryFn: fetchEyeColors,
  });

export const useSkinColors = () =>
  useQuery<{ id: number; desc: string }[], Error>({
    queryKey: ["skinColors"],
    queryFn: fetchSkinColors,
  });

export const useHairColors = () =>
  useQuery<{ id: number; desc: string }[], Error>({
    queryKey: ["hairColors"],
    queryFn: fetchHairColors,
  });
