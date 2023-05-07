import { IUser } from "../assets/types/type";
import * as http from '@/helpers/https';

export const getUsersApi: any = async () => {
  const url = `/api/user`;
  const res =  await http.get<IUser>(url);
    return res.json().then((elem) => {
      return elem;
  });
};