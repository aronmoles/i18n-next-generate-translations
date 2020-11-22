export interface Exporter<T> {
    export(data: T): Promise<boolean>;
}
