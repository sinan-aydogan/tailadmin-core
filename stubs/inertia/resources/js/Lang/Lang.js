// TailAdmin Translates
import t_tr from '../TailAdmin/Lang/tr.json';
import t_en from '../TailAdmin/Lang/en.json';

// Project Translates
import tr from '../Lang/tr.json';
import en from '../Lang/en.json';
/*import bg from '../Lang/bg.json'*/

// Languages
const languages = [
    {
        id: "tr",
        name: "Türkçe",
    },
    {
        id: "en",
        name: "English",
    }
]

// Merge Translates
const translates = {
    tr: {
        ...t_tr,
        ...tr
    },
    en: {
        ...t_en,
        ...en
    },
    /*bg:{
        ...bg,
    }*/
}

export {
    languages,
    translates
}
