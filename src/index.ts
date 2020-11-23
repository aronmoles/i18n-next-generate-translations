#!/usr/bin/env node

import XmlFile from "./file/XmlFile";
import {TranslationsParser} from "./translations/TranslationsParser";
import {FileProcessor} from "./processor/FileProcessor";
import {TargetDir} from "./dir/TargetDir";
import {TranslationLanguageExporter} from "./translations/TranslationLanguageExporter";
import {Language} from "./language/Language";
import {TranslationConstantsExporter} from "./translations/TranslationConstantsExporter";

const commander = require('commander');

commander
    .version('1.0.0')
    .description("Generate json language translations from generic XML.")
    .option('-x, --xml-file <xmlFile>', 'Xml translations file')
    .option('-d, --target-dir <targetDir>', 'Translations target directory')
    .option('-l, --languages <language...>', 'Languages of translations')
    .option('-c, --constants <constanstFile>', 'Generate constants')
    .parse(process.argv);

const xmlFile = new XmlFile(commander.xmlFile);
const targetDir = new TargetDir(commander.targetDir);

const langs = commander.languages;
const languages = langs.map((lang: string) => new Language(lang));

const fileProcessor = new FileProcessor();
fileProcessor.parser = new TranslationsParser(xmlFile)
fileProcessor.addExporter(new TranslationLanguageExporter(targetDir, languages));
if (commander.constants) {
    const constantsTargetDir = new TargetDir(commander.constants);
    fileProcessor.addExporter(new TranslationConstantsExporter(constantsTargetDir));
}
fileProcessor.process()
    .then(() => console.log('Translations success generated'))
    .catch((error: Error) => console.error('Problem to generate translations: ', error.message));
