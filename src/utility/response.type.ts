
type TMeta = {
    page: number;
    limit: number;
    total: number;
}

export type TResponse<T> = {
    success: boolean;
    status: number;
    message: string;
    data: T;
    meta?: TMeta
}