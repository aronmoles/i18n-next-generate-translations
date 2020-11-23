import {Exporter} from "../Exporter";
import {Translation} from "./Translation";
import {Language} from "../language/Language";
import {TranslationLanguageWriter} from "./TranslationLanguageWriter";
import {Dir} from "../dir/Dir";
import {TranslationConstantsWriter} from "./TranslationConstantsWriter";
import {TargetDir} from "../dir/TargetDir";

export class TranslationConstantsExporter implements Exporter<Translation[]> {

    constructor(
        private readonly constantsDir: Dir,
    ) {}

    public async export(data: Translation[]): Promise<boolean> {
        new TranslationConstantsWriter(this.constantsDir).write(data);
        return true;
    }

}
