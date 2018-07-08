"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexRoute {
    static create(router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }
    index(req, res, next) {
        res.send("this is index route");
    }
}
exports.IndexRoute = IndexRoute;
