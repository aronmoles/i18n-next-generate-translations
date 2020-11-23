// @ts-ignore
import {TargetDirMock} from "./mocks/TargetDirMock";
import {TranslationConstantsWriter} from "../src/translations/TranslationConstantsWriter";

const fs = require("fs");
jest.mock('fs');

describe('TranslationConstantsWriter', () => {

    test('TranslationConstantsWriter constructor', () => {
        new TranslationConstantsWriter(new TargetDirMock());
    });

    test('TranslationConstantsWriter write data in file', () => {
        const writer = new TranslationConstantsWriter(new TargetDirMock());

        writer.write([]);

        expect(fs.writeFileSync).toHaveBeenCalled();
    });

})
