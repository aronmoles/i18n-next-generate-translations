import {Language} from "../src/language/Language";

describe('Language', () => {

    test('Language constructor', () => {
        new Language('es');
    })

    test('Language code', () => {
        const language = new Language('es');

        expect(language.code).toEqual('es')
    })


})
