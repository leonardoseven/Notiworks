import { ReactNode } from "react";

export type Props = {
    children?: ReactNode;
}

export type UserAuthenticated = {
    isAuthenticated: boolean,
    username: string | null,
    name: string | null,
    token: string | null
}
export type IAuthContext = {
    userAuthenticated: UserAuthenticated;
    setUserAuthenticated: (newState: UserAuthenticated) => void
}
