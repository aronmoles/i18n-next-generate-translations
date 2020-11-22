import {Translation} from "../src/translations/Translation";

describe('Translation', () => {

    test('Translation constructor', () => {
        new Translation('TR_CODE');
    })

    test('Translation code', () => {
        const translation = new Translation('TR_CODE');

        expect(translation.getCode()).toEqual('TR_CODE')
    })

    test('Translation set language trans', () => {
        const translation = new Translation('TR_CODE');
        translation.setTranslation('es', 'trans')
    })

    test('Translation get language trans', () => {
        const translation = new Translation('TR_CODE');
        translation.setTranslation('es', 'trans')

        expect(translation.getTranslation('es')).toEqual('trans')
    })

})
