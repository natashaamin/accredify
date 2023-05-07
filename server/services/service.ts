import { NextFunction, Request, Response } from "express";

export const handleMethodNotAllowed = (req: Request, res: Response, next: NextFunction) => {
  returnErrorResponse(res, "Invalid method", 405);
}

export const returnErrorResponse = (
  res: Response,
  error: string,
  status = 500
) => {
  console.error(error);
  res.status(status).send({
    message: error,
  });
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
};
