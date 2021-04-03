import { Injectable, NestMiddleware } from "@nestjs/common"
import { Request, Response } from "express";



@Injectable()
export class AuditMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: () => void) {
        console.log('Loggin request IP', req.ip);
        console.log('Loggin request Path', req.path);
        console.log('Loggin request Headers', req.headers);
        next();
    }
}