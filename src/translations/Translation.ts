export class Translation {

    private readonly _code: string;
    private readonly _translations: {[language: string]: string};

    constructor(code: string) {
        this._code = code;
        this._translations = {};
    }

    public getCode(): string {
        return this._code;
    }

    public getTranslation(language: string): string {
        return this._translations[language];
    }

    public setTranslation(language: string, translation: string): void {
        this._translations[language] = translation;
    }
}
