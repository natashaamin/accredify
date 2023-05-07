import { ICareer, IDocument, IUser } from "@/assets/types/type";
import { getCareerApi } from "@/services/careerService";
import { getDocumentApi } from "@/services/documentService";
import { getUsersApi } from "@/services/userService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("my-store", () => {
  const user = ref<IUser>();
  const career = ref<ICareer>();
  const document = ref<IDocument>();

  const loadUser = async () => {
    const _user = await getUsersApi();
    user.value = _user.data;
  };

  const loadCareer = async () => {
    const _career = await getCareerApi();
    career.value = _career.data;
  };

  const loadDocument = async () => {
    const _document = await getDocumentApi();
    document.value = _document;
  };

  return {
    user,
    career,
    document,
    loadUser,
    loadCareer,
    loadDocument,
  };
});
