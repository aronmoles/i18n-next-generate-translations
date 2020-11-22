import {Writer} from "../Writer";
import {Language} from "../language/Language";
import {Translation} from "./Translation";
import {Dir} from "../dir/Dir";
const path = require("path");
const fs = require("fs");

export class TranslationLanguageWriter implements Writer<Translation[]> {

    constructor(
        private readonly language: Language,
        private readonly targetDir: Dir,
    ) {}

    write(translations: Translation[]): void {
        const data: {[key: string]: string} = {};
        for (const translation of translations) {
            data[translation.getCode()] = translation.getTranslation(this.language.code);
        }
        fs.writeFileSync(path.join(this.targetDir.dirPath(), `tranlations.${this.language.code}.json`), JSON.stringify(data, null, 2))
    }

}
