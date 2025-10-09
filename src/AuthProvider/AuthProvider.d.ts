import { ReactNode } from "react";
import { User, UserCredential } from "firebase/auth";
interface AuthContextType {
    user: User | null;
    googleLogin: () => Promise<UserCredential>;
    createUser: (email: string, password: string) => Promise<UserCredential>;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    loading: boolean;
}
export declare const AuthContext: import("react").Context<AuthContextType | null>;
declare const AuthProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default AuthProvider;
