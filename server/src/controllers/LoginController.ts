import { Request, Response } from "express";
import { get, controller, post, bodyValidator } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    console.log("getlogin");
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
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === "edu@gmail.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
