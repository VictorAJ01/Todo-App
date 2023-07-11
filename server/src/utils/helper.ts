import bcrypt from "bcryptjs";

export function HashPassword(password: string) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
}

export function ComparePassword(password: string, hashedPassword: string) {
  return bcrypt.compareSync(password, hashedPassword);
}
