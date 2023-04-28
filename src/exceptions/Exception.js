import { outputType, print } from "../helpers/print.js";

export default class Exception extends Error {
  static USER_EXISTING = "User already exists";
  static CANNOT_REGISTER_USER = "Cannot register user";
  static WRONG_EMAIL_OR_PASSWORD = "Wrong email or password";

  constructor(message) {
    super(message);
    print(message, outputType.ERROR);
  }
}
