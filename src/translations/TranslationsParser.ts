import {Parser} from "../Parser";
import {Translation} from "./Translation";
import {File} from "../file/File";
const xml2js = require('xml2js');

export class TranslationsParser implements Parser<Translation[]> {

    constructor(
        private readonly file: File,
    ) {}

    public parse(): Promise<Translation[]> {
        const parser = new xml2js.Parser();

        return new Promise((resolve) => {
            parser.parseString(this.file.getFileContent(), (err: string, result: any) => {
                const translations: Translation[] = [];

                const translationsXML = result.translations.translation;
                for (const translationXML of translationsXML) {

                    const code = translationXML['$']['code'];
                    const translation = new Translation(code);

                    const valuesXML = translationXML['value'];
                    for (const valueXML of valuesXML) {
                        const languageTr = valueXML['$']['language'];
                        const valueTr = valueXML['_'];
                        translation.setTranslation(languageTr, valueTr)
                    }

                    translations.push(translation);
                }
                resolve(translations);
            });
        })
    }

}
