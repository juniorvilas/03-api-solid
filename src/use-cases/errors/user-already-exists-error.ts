export class UserAlredyExistsError extends Error {
  constructor() {
    super('Email already exists!')
  }
}
