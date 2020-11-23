# i18n-next-generate-translations

## Installation

```
npm add --save-dev i18n-next-generate-translations
```

or

```
yarn install -D i18n-next-generate-translations
```

## How to usase

First step, we should to create a XML file that contains our translations in all languages. 
The file should have the next format:

```
<?xml version="1.0" encoding="utf-8"?>
<translations
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="file:../schema/TranslationsSchema.xsd"
>
    <translation code="TR_SEXON">
        <value language="es">Sexon es</value>
        <value language="en">Sexon en</value>
    </translation>

</translations>
``` 

In the package is defined a XML Schema that help to build a file translations.

Then we only has to execute command `generate-translations` like a next example.

```
generate-translations -x translations.xml -d translations -l es en
```

## Integration with i18n-next

To integrate with `i18n-next` is very simply. It's only need import generated files into initial configuration like this:

```
import i18next from "i18next";
import translationsEn from './translations/translations.en.json';
import translationsEs from './translations/translations.es.json';

i18next
    .init({
        lng: 'en',
        resources: {
            en: {
                translation: translationsEn,
            },
            es: {
                translation: translationsEs,
            },
        },
    });
```

### Options

#### `-x, --xml-file`
Indicate input XML with translations.

#### `-d, --target-dir`
Directory on generate translations json.

#### `-l, --languages`
Different languages that like generate files.

#### `-c, --constants`
To generate constants file.
