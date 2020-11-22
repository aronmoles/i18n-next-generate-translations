import {TargetDir} from "../src/dir/TargetDir";

const fs = require("fs");
jest.mock('fs');

describe('TargetDir', () => {

    test('TargetDir constructor', () => {
        fs.existsSync.mockReturnValue(true);
        fs.lstatSync.mockImplementation(() => ({
            isDirectory: () => true,
        }));

        new TargetDir('/path');
    })

    test('TargetDir constructor error', () => {
        fs.existsSync.mockReturnValue(false);

        expect( () => new TargetDir('/path')).toThrowError();
    })

})
