import axios from "axios";
import Cookie from "js-cookie";

export async function getUsersToApprove() {
  return await axios.get(
    "http://localhost:5000/api/users/getCompaniesToApprove",
    {
      headers: { Authorization: Cookie.get("token") },
    }
  );
}
