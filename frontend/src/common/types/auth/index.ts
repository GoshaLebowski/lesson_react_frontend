import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import {ClassNameMap} from "@mui/styles";

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface RegisterFormValues {
    firstName: string;
    username: string;
    email: string;
    password: string;
}

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
    TContext extends FieldValues = any,
> {
    navigate: (to: string) => void;
    register: UseFormRegister<TContext>;
    errors: FieldErrors<TFieldValues>;
    classes: ClassNameMap<"form" | "root" | "incitingText">;
    loading: boolean;
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
    TContext extends FieldValues = any,
> {
    navigate: (to: string) => void;
    register: UseFormRegister<TContext>;
    errors: FieldErrors<TFieldValues>;
    classes: ClassNameMap<"form" | "root" | "incitingText">;
    loading: boolean;
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean,
    isLoading: boolean
}

interface IPublicUser {
    id: number | null,
    firstName: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string
    watchlist:[IWatchlist]
}

interface IWatchlist {
    id: number | null,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: number | null
}