export declare enum Type {
    TECHNICAL = 0,
    CORE = 1
}
export interface ICareer {
    id: number;
    name: string;
    description: string;
    category: string;
    type: Type;
    progress: number;
}
export interface ICurrentOrganisation {
    id: number;
    name: string;
    logo_url: string;
    is_personal: boolean;
}
export interface IUser {
    id: number;
    name: string;
    email: string;
    profile_picture_url: string;
    email_verified_at: string;
    identification_number: string;
    current_organisation: ICurrentOrganisation;
}
export interface DocumentData {
    id: number;
    status: string;
    document_name: string;
    issuer_name: string;
    issuer_logo_url: string;
    recipient_name: string;
    received_on: string;
    expire_at: string;
    created_at: string;
    updated_at: string;
    achieved_at: string;
    deleted_at: string;
}
export interface ILinks {
    first: string;
    last: string;
    prev: string;
    next: string;
}
export interface IMetaLinks {
    url: string;
    label: string;
    active: boolean;
}
export interface IMeta {
    current_page: number;
    from: number;
    lsat_page: number;
    links: IMetaLinks[];
}
export interface IDocument {
    data: DocumentData[];
    links: ILinks;
    meta: IMeta;
    path: string;
    per_page: number;
    to: number;
    total: number;
}
