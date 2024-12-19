// import { apiClient } from "./apiClient";
// import { ENDPOINTS } from "./endpoints";

// export const fetchUsers = async (page = 1, limit = 10) => {
//   try {
//     const response = await apiClient.get(ENDPOINTS.USERS, {
//       params: { _page: page, _limit: limit },
//     });
//     return response.data;
//     console.log(response.data);
//   } catch (error) {
//     throw new Error("Failed to fetch usershaha");
//   }
// };

import { apiClient } from "./apiClient";

export const fetchUsers = async () => {
  try {
    const response = await apiClient.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users from JSONPlaceholder API");
  }
};
