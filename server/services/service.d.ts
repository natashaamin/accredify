import { NextFunction, Request, Response } from "express";
export declare const handleMethodNotAllowed: (req: Request, res: Response, next: NextFunction) => void;
export declare const returnErrorResponse: (res: Response, error: string, status?: number) => void;
export declare const errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => void;
