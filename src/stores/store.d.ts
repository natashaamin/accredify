import { ICareer, IDocument, IUser } from "@/assets/types/type";
export declare const useStore: import("pinia").StoreDefinition<"my-store", import("pinia")._UnwrapAll<Pick<{
    user: import("vue").Ref<IUser | undefined>;
    career: import("vue").Ref<ICareer | undefined>;
    document: import("vue").Ref<IDocument | undefined>;
    loadUser: () => Promise<void>;
    loadCareer: () => Promise<void>;
    loadDocument: () => Promise<void>;
}, "document" | "user" | "career">>, Pick<{
    user: import("vue").Ref<IUser | undefined>;
    career: import("vue").Ref<ICareer | undefined>;
    document: import("vue").Ref<IDocument | undefined>;
    loadUser: () => Promise<void>;
    loadCareer: () => Promise<void>;
    loadDocument: () => Promise<void>;
}, never>, Pick<{
    user: import("vue").Ref<IUser | undefined>;
    career: import("vue").Ref<ICareer | undefined>;
    document: import("vue").Ref<IDocument | undefined>;
    loadUser: () => Promise<void>;
    loadCareer: () => Promise<void>;
    loadDocument: () => Promise<void>;
}, "loadUser" | "loadCareer" | "loadDocument">>;
