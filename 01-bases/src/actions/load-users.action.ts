// src/actions/load-users.action.ts
import type { UserListResponse } from "../interfaces/reqres.response";
import { reqres } from "../api/reqres.client";

export const loadUsersAction = async (page: number) => {
  try {
    const { data } = await reqres.get<UserListResponse>("/users", {
      params: { page },
    });
    return data.data; // ← la lista
  } catch (error) {
    console.error("loadUsersAction error:", error);
    return [];
  }
};
