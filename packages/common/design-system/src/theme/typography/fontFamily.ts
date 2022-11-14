import * as fonts from './assets';

const fontNames = new Set();

for (const exe in fonts) {
    // @ts-ignore
    for (const fontName in fonts[exe]) {
        fontNames.add(fontName);
    }
}

export const FONT_FAMILY = [...Array.from(fontNames), 'arial', 'sans-serif'];
