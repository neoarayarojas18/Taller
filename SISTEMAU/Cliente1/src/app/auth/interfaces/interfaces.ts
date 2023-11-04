export interface AuthResponse{
    ok: boolean;
    uid?: string;
    nombre?: string;
    token?: string;
    msg?: string;
}


export interface User{
    uid: string;
    nombre: string;
}