import {Exporter} from "../Exporter";
import {Translation} from "./Translation";
import {TargetDir} from "../dir/TargetDir";
import {Language} from "../language/Language";
import {TranslationLanguageWriter} from "./TranslationLanguageWriter";

export class TranslationLanguageExporter implements Exporter<Translation[]> {

    constructor(
        private readonly targetDir: TargetDir,
        private readonly languages: Language[],
    ) {}

    public async export(data: Translation[]): Promise<boolean> {
        for (const language of this.languages) {
            new TranslationLanguageWriter(language, this.targetDir).write(data);
        }
        return true;
    }

}
