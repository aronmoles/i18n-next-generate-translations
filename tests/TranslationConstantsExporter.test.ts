// @ts-ignore
import {TargetDirMock} from "./mocks/TargetDirMock";
import {TranslationConstantsExporter} from "../src/translations/TranslationConstantsExporter";
import {TranslationConstantsWriter} from "../src/translations/TranslationConstantsWriter";

describe('TranslationConstantsExporter', () => {

    test('TranslationConstantsExporter constructor', () => {
        new TranslationConstantsExporter(new TargetDirMock());
    });

    test('TranslationConstantsExporter call TranslationLanguageWriter', async () => {
        const writeFn = jest.fn();
        TranslationConstantsWriter.prototype.write = writeFn;
        const translationExporter = new TranslationConstantsExporter(new TargetDirMock());

        await translationExporter.export([]);

        expect(writeFn).toHaveBeenCalled();
    })


})
