import {FileProcessor} from "../src/processor/FileProcessor";

describe('FileProcessor', () => {

    test('FileProcessor constructor', () => {
        new FileProcessor();
    })

    test('FileProcessor throws exception if not parser', () => {
        const fileProcessor = new FileProcessor();

        expect(async () => await fileProcessor.process()).rejects.toThrowError();
    })

    test('FileProcessor parser have been called', async () => {
        const parseFn = jest.fn();

        const fileProcessor = new FileProcessor();
        fileProcessor.parser = {
            parse: parseFn
        }
        await fileProcessor.process();

        expect(parseFn).toHaveBeenCalled();
    })

    test('FileProcessor exporter have been called', async () => {
        const exportFn = jest.fn();

        const fileProcessor = new FileProcessor();
        fileProcessor.parser = {
            parse: () => Promise.resolve(true)
        }
        fileProcessor.addExporter({
            export: exportFn,
        })
        await fileProcessor.process();

        expect(exportFn).toHaveBeenCalled();
    })


})
