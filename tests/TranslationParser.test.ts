// @ts-ignore
import {XmlFileMock} from "./mocks/XmlFileMock";
import {TranslationsParser} from "../src/translations/TranslationsParser";

const fs = require("fs");
jest.mock('fs');

describe('TranslationsParser', () => {

    const content = `
    <?xml version="1.0" encoding="utf-8"?>
    <translations>
        <translation code="TR_CODE">
            <value language="es">trans es</value>
            <value language="en">trans en</value>
        </translation>
    </translations>
    `

    test('TranslationsParser constructor', () => {
        new TranslationsParser(new XmlFileMock(content));
    });

    test('TranslationsParser write data in file', async () => {
        const parser = new TranslationsParser(new XmlFileMock(content));

        const translations = await parser.parse();

        expect(translations.length).toEqual(1);
    });

})
