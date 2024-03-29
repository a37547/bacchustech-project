import axios from "axios";

export async function getGeneralDataByYearAndCompany(year, company) {
  return await axios.get(
    "http://localhost:5000/api/generalData/getByYearAndCompany",
    {
      params: { year: year, company_name: company },
    }
  );
}

export async function getMaterialsByYearAndCompany(year, company) {
  return await axios.get(
    "http://localhost:5000/api/users/getMaterialsByYearAndCompany",
    {
      params: { year: year, company_name: company },
    }
  );
}

export async function getEnergyUsedInMaterialsLogisticByYearAndCompany(
  year,
  company
) {
  return await axios.get(
    "http://localhost:5000/api/users/getEnergyUsedInMaterialsLogisticByYearAndCompany",
    {
      params: { year: year, company_name: company },
    }
  );
}
