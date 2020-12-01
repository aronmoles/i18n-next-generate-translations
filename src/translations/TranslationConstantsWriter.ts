import {Writer} from "../Writer";
import {Translation} from "./Translation";
import path from "path";
import {Dir} from "../dir/Dir";
const fs = require("fs");

export class TranslationConstantsWriter implements Writer<Translation[]> {

    constructor(
        private readonly constantsDir: Dir,
    ) {}

    write(translations: Translation[]): void {
        const data: string = translations
            .map((translation) => `export const ${translation.getCode()} = '${translation.getCode()}';`)
            .join('\n');
        fs.writeFileSync(path.join(this.constantsDir.dirPath(), 'TR.ts'), data)
    }

}
