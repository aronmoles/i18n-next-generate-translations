#!/usr/bin/env node

import XmlFile from "./file/XmlFile";
import {TranslationsParser} from "./translations/TranslationsParser";
import {FileProcessor} from "./processor/FileProcessor";
import {TargetDir} from "./dir/TargetDir";
import {TranslationLanguageExporter} from "./translations/TranslationLanguageExporter";
import {Language} from "./language/Language";

const commander = require('commander');

commander
    .version('1.0.0')
    .description("Generate json language translations from generic XML.")
    .option('-xml, --xml-file <xmlFile>', 'Xml translations file')
    .option('-dir, --target-dir <targetDir>', 'Translations target directory')
    .parse(process.argv);

const xmlFile = new XmlFile(commander.xmlFile);
const targetDir = new TargetDir(commander.targetDir);

const languages = [new Language('es'), new Language('en')]

const fileProcessor = new FileProcessor();
fileProcessor.parser = new TranslationsParser(xmlFile)
fileProcessor.addExporter(new TranslationLanguageExporter(targetDir, languages));
fileProcessor.process()
    .then(() => console.log('Translations success generated'))
    .catch(() => console.error('Problem to generate translations'));
