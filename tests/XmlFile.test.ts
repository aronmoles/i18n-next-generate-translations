import XmlFile from "../src/file/XmlFile";
const fs = require("fs");

jest.mock('fs');

describe('XmlFile', () => {

    test('XmlFile constructor', () => {
        fs.existsSync.mockReturnValue(true);

        new XmlFile('/path/file.xml');
    })

    test('XmlFile getFileContent', () => {
        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue('Content');

        const xmlFile = new XmlFile('/path/file.xml');

        expect(xmlFile.getFileContent()).toEqual('Content')
    })

    test('XmlFile constructor error', () => {
        fs.existsSync.mockReturnValue(false);

        expect( () => new XmlFile('/path/file.xml')).toThrowError();
    })

    test('XmlFile get content', () => {
        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue('Content');

        const xmlFile = new XmlFile('/path/file.xml');

        expect( xmlFile.getFileContent()).toEqual('Content');
    })

})
