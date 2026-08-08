import http from "node:http";
import { Router } from "./presentation/routes.js";

export class Server {
    private server: http.Server;

    constructor(private router: Router) {
        this.server = http.createServer(
            async (req, res) => {
                await this.router.handle(req, res);
            }
        );
    }

    public start(port: number): void {
        this.server.listen(port, () => {
            console.log(`Server running on port: ${port}`);
        });
    }
}