import {Language} from "../src/language/Language";
import {TranslationLanguageWriter} from "../src/translations/TranslationLanguageWriter";
// @ts-ignore
import {TargetDirMock} from "./mocks/TargetDirMock";

const fs = require("fs");
jest.mock('fs');

describe('TranslationLanguageWriter', () => {

    test('TranslationLanguageWriter constructor', () => {
        new TranslationLanguageWriter(new Language('es'), new TargetDirMock());
    });

    test('TranslationLanguageWriter write data in file', () => {
        const writer = new TranslationLanguageWriter(new Language('es'), new TargetDirMock());

        writer.write([]);

        expect(fs.writeFileSync).toHaveBeenCalled();
    });

})
