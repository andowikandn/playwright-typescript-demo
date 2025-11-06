import { config } from 'dotenv';
config();

export const BASE_URL = process.env.BASE_URL || 'https://www.saucedemo.com';
export const USERNAME_STANDARD = process.env.USERNAME_STANDARD!;
export const USERNAME_LOCKOUT = process.env.USERNAME_LOCKOUT!;
export const PASSWORD = process.env.PASSWORD!;