import { ICareer } from "../assets/types/type";
import * as http from '@/helpers/https';

export const getCareerApi: any = async () => {
  const url = `/api/career`;
  const res =  await http.get<ICareer>(url);
    return res.json().then((elem) => {
      return elem;
  });
};