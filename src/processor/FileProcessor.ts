import {Processor} from "./Processor";
import {Exporter} from "../Exporter";
import {Parser} from "../Parser";

export class FileProcessor<T> implements Processor {

    private _parser?: Parser<T>;
    private readonly exporters: Exporter<T>[];

    constructor() {
        this.exporters = [];
    }

    set parser(parser: Parser<T>) {
        this._parser = parser;
    }

    public addExporter(exporter: Exporter<T>){
        this.exporters.push(exporter);
    }

    public async process(): Promise<boolean> {
        if (!this._parser) {
            throw new Error('Parser not exists');
        }
        const data = await this._parser.parse();
        let result = true;
        for (const exporter of this.exporters) {
            const resultExportation = await exporter.export(data);
            result = result && resultExportation;
        }
        return result;
    }

}
