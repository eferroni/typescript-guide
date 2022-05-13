"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not permitted");
}
const router = (0, express_1.Router)();
exports.router = router;
router.get("/login", (req, res) => {
    res.send(`
  <form method="POST">
    <div>
        <label for="email">Email</label>
        <input name="email" id="email"/>
    </div>
    <div>
        <label for="password">Password</label>
        <input name="password" id="password" type="password"/>
    </div>
    <button>Submit</button>
  </form>
  `);
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email &&
        password &&
        email === "edu@gmail.com" &&
        password === "password") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password");
    }
});
router.get("/", (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
        <div>
            <h1>Welcome</h1>
            <a href="/logout">Logout</a>
        </div>
        `);
    }
    else {
        res.send(`
        <div>
            <h1>You are not logged in</h1>
            <a href="/login">Login</a>
        </div>
      `);
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
    res.send(`
    <div>
    <h1>Protected Route</h1>
    </div>
    `);
});