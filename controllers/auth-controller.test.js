const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../app");

const authController = require("./auth-controller");

const User = require("../models/users");

const { DB_HOST_TEST, PORT } = process.env;

app.post("/users/login", authController.signin);
app.post("/users/reqister", authController.signup);

const signinData = {
  email: "finrod@mail.com",
  password: "123456",
};

describe("test signin controller", () => {
  let server = null;
  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(PORT);
    await request(app).post("/users/register").send(signinData);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  test("test correct signin data", async () => {
    const { _body, statusCode } = await request(app)
      .post("/users/login")
      .send(signinData);

    // console.log(_body);

    expect(statusCode).toBe(200);

    expect(_body).toHaveProperty("token");
    expect(_body.user).toHaveProperty("email");
    expect(_body.user).toHaveProperty("subscription");
    expect(typeof _body.user.email).toBe("string");
    expect(typeof _body.user.subscription).toBe("string");
  });
});
