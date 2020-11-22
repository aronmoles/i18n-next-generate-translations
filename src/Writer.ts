export interface Writer<T> {
    write(data: T): void;
}
