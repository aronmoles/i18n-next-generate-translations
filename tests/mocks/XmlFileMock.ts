import {File} from "../../src/file/File";

export class XmlFileMock implements File {

    constructor(
        private readonly content: string,
    ) {}

    getFileContent(): string {
        return this.content;
    }

}
