import {TranslationLanguageExporter} from "../src/translations/TranslationLanguageExporter";

// @ts-ignore
import {TargetDirMock} from "./mocks/TargetDirMock";
import {Language} from "../src/language/Language";
import {TranslationLanguageWriter} from "../src/translations/TranslationLanguageWriter";

describe('TranslationLanguageExporter', () => {

    test('TranslationLanguageExporter constructor', () => {
        new TranslationLanguageExporter(new TargetDirMock(), []);
    });

    test('TranslationLanguageExporter call TranslationLanguageWriter', async () => {
        const writeFn = jest.fn();
        TranslationLanguageWriter.prototype.write = writeFn;
        const translationExporter = new TranslationLanguageExporter(new TargetDirMock(), [new Language('es')]);

        await translationExporter.export([]);

        expect(writeFn).toHaveBeenCalled();
    })


})
