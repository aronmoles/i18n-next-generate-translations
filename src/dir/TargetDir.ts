import {Dir} from "./Dir";
const fs = require("fs");

export class TargetDir implements Dir {

    private readonly _dirPath: string;

    constructor(dirPath: string) {
        this._dirPath = dirPath;
        this.isValid();
    }

    isValid(): boolean {
        if (!fs.existsSync(this._dirPath)) {
            throw new Error('Target dir not exists')
        }
        if (!fs.lstatSync(this._dirPath).isDirectory()) {
            throw new Error('Target dir is not a directory')
        }
        return true;
    }

    get dirPath(): string {
        return this._dirPath;
    }
}

