import axios from "axios";

export async function getEnergyByYearAndCompany(year, company) {
  return await axios.get(
    "http://localhost:5000/api/users/getEnergyByYearAndCompany",
    {
      params: { year: year, company_name: company },
    }
  );
}
