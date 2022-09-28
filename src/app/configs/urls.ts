import { environment } from "src/environments/environment";

const baseUrl = environment.API;

export const urls = {
    auth: `${baseUrl}/auth`,
    refresh: `${baseUrl}/refresh`,
    users: `${baseUrl}/users`,
    cars: `${baseUrl}/cars`,
}