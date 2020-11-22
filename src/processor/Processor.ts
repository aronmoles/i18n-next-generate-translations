export interface Processor {
    process(): Promise<boolean>
}
