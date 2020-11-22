import {Dir} from "../../src/dir/Dir";

export class TargetDirMock implements Dir {

    isValid(): boolean {
        return true;
    }

    dirPath(): string {
        return "";
    }

}
