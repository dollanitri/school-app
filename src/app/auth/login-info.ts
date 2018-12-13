export class LoginInfo {
    username: string;
    password: string;
    tenant: string;

    constructor(username: string, password: string, tenant: string) {
        this.username = username;
        this.password = password;
        this.tenant = tenant;
    }
}