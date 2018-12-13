export class JwtResponse {
    accessToken: string;
    type: string;
    username: string;
    tenant: string;
    authorities: string[];
}