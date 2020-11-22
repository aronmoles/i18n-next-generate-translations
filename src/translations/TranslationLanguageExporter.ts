import {Exporter} from "../Exporter";
import {Translation} from "./Translation";
import {Language} from "../language/Language";
import {TranslationLanguageWriter} from "./TranslationLanguageWriter";
import {Dir} from "../dir/Dir";

export class TranslationLanguageExporter implements Exporter<Translation[]> {

    constructor(
        private readonly targetDir: Dir,
        private readonly languages: Language[],
    ) {}

    public async export(data: Translation[]): Promise<boolean> {
        for (const language of this.languages) {
            new TranslationLanguageWriter(language, this.targetDir).write(data);
        }
        return true;
    }

}
