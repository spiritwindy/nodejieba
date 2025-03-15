declare const DEFAULT_DICT: string;
declare const DEFAULT_HMM_DICT: string;
declare const DEFAULT_USER_DICT: string;
declare const DEFAULT_IDF_DICT: string;
declare const DEFAULT_STOP_WORD_DICT: string;
interface LoadOptions {
    dict?: string;
    hmmDict?: string;
    userDict?: string;
    idfDict?: string;
    stopWordDict?: string;
}
declare const load: ({ dict, hmmDict, userDict, idfDict, stopWordDict, }?: LoadOptions) => void;
declare const cut: (content: string, strict?: boolean) => string[];
declare const cutAll: (content: string) => string[];
declare const cutHMM: (content: string) => string[];
declare const cutForSearch: (content: string, strict?: boolean) => string[];
declare const cutSmall: (content: string, limit: number) => string[];
interface TagResult {
    word: string;
    tag: string;
}
declare const tag: (content: string) => TagResult[];
declare const insertWord: (word: string) => boolean;
interface ExtractResult {
    word: string;
    weight: number;
}
declare const extract: (content: string, threshold: number) => ExtractResult[];
declare const textRankExtract: (content: string, threshold: number) => ExtractResult[];

export { DEFAULT_DICT, DEFAULT_HMM_DICT, DEFAULT_IDF_DICT, DEFAULT_STOP_WORD_DICT, DEFAULT_USER_DICT, ExtractResult, LoadOptions, TagResult, cut, cutAll, cutForSearch, cutHMM, cutSmall, extract, insertWord, load, tag, textRankExtract };
//# sourceMappingURL=index.d.mts.map
