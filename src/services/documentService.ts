import { IDocument } from "../assets/types/type";
import * as http from '@/helpers/https';

export const getDocumentApi: any = async () => {
  const url = `/api/document`;
  const res =  await http.get<IDocument>(url);
    return res.json().then((elem) => {
      return elem;
  });
};