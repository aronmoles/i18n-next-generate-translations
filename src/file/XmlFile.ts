import {File} from "./File";

const fs = require("fs");

export default class XmlFile implements File {

    private readonly path: string;

    constructor(path: string) {
        if (!fs.existsSync(path)) {
            throw new Error('XML File not exists');
        }
        this.path = path;
    }

    public getFileContent(): string {
        return fs.readFileSync(this.path).toString();
    }
}

