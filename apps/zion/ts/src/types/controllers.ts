import { Request, Response } from "express";

export type controller<T> = (req: Request & { body: T }, res: Response) => void;
