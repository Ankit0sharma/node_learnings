const request = require('supertest');
const faker = require('faker');

let server = require('../../app');
let app = server

let signUpRequestBody;
let loginRequestBody;
let email;

beforeAll(async () => {
  email = faker.internet.email();
  const password = faker.internet.password()
  signUpRequestBody = {
    name: faker.name.firstName(),
    password: password,
    email: email
  };
  loginRequestBody = {
    email: email,
    password: password,
    role: "se"
  };
});

describe('Auth Test', () => {
  //1.  Signup Employee test case
  it("Sign up success", async () => {
    const response = await request(app)
      .post('/api/v1/employee/register-se')
      .send(signUpRequestBody)
      .expect(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Account created successfully, Please log in");
    const createdPerson = response.body.createdPerson;
    expect(createdPerson).toBeDefined();
    expect(createdPerson.name).toBe(signUpRequestBody.name);
    expect(createdPerson.email).toBe(signUpRequestBody.email);
    expect(createdPerson.role).toBe("se");
  });
  //2. If employee is already exists
  it('returns an error if the user already exists', async () => {
    const response = await request(app)
      .post('/api/v1/employee/register-se')
      .send(signUpRequestBody)
      .expect(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Employee already exists');
  });

  // /* ---------------------------Login test Cases ---------------------------- */
  //1. Success
  it("Sign in Success", async () => {
    const response = await request(app)
      .post('/api/v1/employee/Login-se')
      .send(loginRequestBody)
      .expect(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Employee logged in successfully")
    expect(response.body.generatedToken).toBeDefined();
  })
});
//2. Failure - Invalid credentials
it("Invalid credentials", async () => {
  const res = await request(app)
    .post('/api/v1/employee/Login-se')
    .send({
      email: loginRequestBody.email,
      password: faker.internet.password()
    })
    .expect(401);
  expect(res.body.success).toBe(false);
  expect(res.body.message).toBe("Authentication failed")
})
//3. Failure - Invalid email
it("Invalid email  ", async () => {
  const response = await request(app)
    .post('/api/v1/employee/Login-se')
    .send({
      email: faker.internet.email(),
      password: faker.internet.password()
    }).expect(401);
  expect(response.body.success).toBe(false);
  expect(response.body.message).toBe("Authentication failed")
})
