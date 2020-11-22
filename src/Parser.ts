export interface Parser<T> {
    parse(): Promise<T>;
}
