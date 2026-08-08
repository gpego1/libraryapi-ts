import { IncomingMessage, ServerResponse } from "node:http";

type Handler = (
    req: IncomingMessage,
    res: ServerResponse
) => void | Promise<void>;

interface Route {
    method: string;
    path: string;
    handler: Handler;
}

export class Router {
    private routes: Route[] = [];

    public get(path: string, handler: Handler): void {
        this.routes.push({
            method: "GET",
            path,
            handler
        });
    }

    public post(path: string, handler: Handler): void {
        this.routes.push({
            method: "POST",
            path,
            handler
        });
    }

    public async handle(
        req: IncomingMessage,
        res: ServerResponse
    ): Promise<void> {

        const method = req.method;
        const url = req.url;

        const route = this.routes.find(
            route => route.method === method && route.path === url
        );

        if (!route) {
            res.writeHead(404, {"Content-Type":"application/json"})

            res.end(JSON.stringify({
                "error":"Could not find path"
            }));
            return;
        }
        await route.handler(req, res);
    }
}