import { useContext, type ReactNode } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import type { TableLocale } from 'antd/es/table/interface';

type TableTexts = { expandRow: string; collapseRow: string; expandAll: string; collapseAll: string; removeFilter: (chipText: string) => string };

// The labels antd has no string for, in the languages DatePicker's `lang` supports. Row labels follow antd's own wording
// where antd has one, and fill the languages it lacks (bg, el, fi, sl). Machine-written: check with the translators.
const texts = {
    en: { expandRow: 'Expand row', collapseRow: 'Collapse row', expandAll: 'Expand all rows', collapseAll: 'Collapse all rows', removeFilter: (chip) => `Remove ${chip}` },
    us: { expandRow: 'Expand row', collapseRow: 'Collapse row', expandAll: 'Expand all rows', collapseAll: 'Collapse all rows', removeFilter: (chip) => `Remove ${chip}` },
    bg: { expandRow: 'Разгъване на реда', collapseRow: 'Свиване на реда', expandAll: 'Разгъване на всички редове', collapseAll: 'Свиване на всички редове', removeFilter: (chip) => `Премахване на ${chip}` },
    br: { expandRow: 'Expandir linha', collapseRow: 'Colapsar linha', expandAll: 'Expandir todas as linhas', collapseAll: 'Colapsar todas as linhas', removeFilter: (chip) => `Remover ${chip}` },
    be: { expandRow: 'Rij uitklappen', collapseRow: 'Rij inklappen', expandAll: 'Alle rijen uitklappen', collapseAll: 'Alle rijen inklappen', removeFilter: (chip) => `${chip} verwijderen` },
    ca: { expandRow: 'Ampliar la fila', collapseRow: 'Plegar la fila', expandAll: 'Ampliar totes les files', collapseAll: 'Plegar totes les files', removeFilter: (chip) => `Treure ${chip}` },
    da: { expandRow: 'Udvid række', collapseRow: 'Skjul række', expandAll: 'Udvid alle rækker', collapseAll: 'Skjul alle rækker', removeFilter: (chip) => `Fjern ${chip}` },
    de: { expandRow: 'Zeile erweitern', collapseRow: 'Zeile reduzieren', expandAll: 'Alle Zeilen erweitern', collapseAll: 'Alle Zeilen reduzieren', removeFilter: (chip) => `${chip} entfernen` },
    el: { expandRow: 'Ανάπτυξη γραμμής', collapseRow: 'Σύμπτυξη γραμμής', expandAll: 'Ανάπτυξη όλων των γραμμών', collapseAll: 'Σύμπτυξη όλων των γραμμών', removeFilter: (chip) => `Αφαίρεση ${chip}` },
    es: { expandRow: 'Expandir fila', collapseRow: 'Colapsar fila', expandAll: 'Expandir todas las filas', collapseAll: 'Colapsar todas las filas', removeFilter: (chip) => `Quitar ${chip}` },
    fi: { expandRow: 'Laajenna rivi', collapseRow: 'Kutista rivi', expandAll: 'Laajenna kaikki rivit', collapseAll: 'Kutista kaikki rivit', removeFilter: (chip) => `Poista ${chip}` },
    fr: { expandRow: 'Développer la ligne', collapseRow: 'Réduire la ligne', expandAll: 'Développer toutes les lignes', collapseAll: 'Réduire toutes les lignes', removeFilter: (chip) => `Retirer ${chip}` },
    it: { expandRow: 'Espandi riga', collapseRow: 'Comprimi riga', expandAll: 'Espandi tutte le righe', collapseAll: 'Comprimi tutte le righe', removeFilter: (chip) => `Rimuovi ${chip}` },
    nl: { expandRow: 'Rij uitklappen', collapseRow: 'Rij inklappen', expandAll: 'Alle rijen uitklappen', collapseAll: 'Alle rijen inklappen', removeFilter: (chip) => `${chip} verwijderen` },
    pl: { expandRow: 'Rozwiń wiersz', collapseRow: 'Zwiń wiersz', expandAll: 'Rozwiń wszystkie wiersze', collapseAll: 'Zwiń wszystkie wiersze', removeFilter: (chip) => `Usuń ${chip}` },
    pt: { expandRow: 'Expandir linha', collapseRow: 'Colapsar linha', expandAll: 'Expandir todas as linhas', collapseAll: 'Colapsar todas as linhas', removeFilter: (chip) => `Remover ${chip}` },
    sl: { expandRow: 'Razširi vrstico', collapseRow: 'Strni vrstico', expandAll: 'Razširi vse vrstice', collapseAll: 'Strni vse vrstice', removeFilter: (chip) => `Odstrani ${chip}` },
    sv: { expandRow: 'Expandera rad', collapseRow: 'Komprimera rad', expandAll: 'Expandera alla rader', collapseAll: 'Komprimera alla rader', removeFilter: (chip) => `Ta bort ${chip}` },
    tr: { expandRow: 'Satırı genişlet', collapseRow: 'Satırı daralt', expandAll: 'Tüm satırları genişlet', collapseAll: 'Tüm satırları daralt', removeFilter: (chip) => `${chip} kaldır` },
    zh: { expandRow: '展开行', collapseRow: '收起行', expandAll: '展开全部行', collapseAll: '收起全部行', removeFilter: (chip) => `移除 ${chip}` },
} satisfies Record<string, TableTexts>;

/** The table's languages: the codes DatePicker's `lang` takes. */
export type TableLang = keyof typeof texts;

export type TableLabels = {
    filterTitle: string;
    filterConfirm: ReactNode;
    filterReset: ReactNode;
    expand: string;
    collapse: string;
    expandAll: string;
    collapseAll: string;
    removeFilter: (chipText: string) => string;
};

/**
 * Labels from the table's `locale`, then antd's locale (the `lang` one, set by TableV2, or the app's), then the
 * table's own texts for `lang`, then English.
 */
export const useTableLabels = (locale?: TableLocale, lang?: TableLang): TableLabels => {
    const { locale: antdLocale } = useContext(AntdConfigProvider.ConfigContext);
    const own = texts[lang ?? 'en'];
    const antd = { ...antdLocale?.Table, ...locale };
    return {
        filterTitle: antd.filterTitle ?? 'Filter menu',
        filterConfirm: antd.filterConfirm ?? 'OK',
        filterReset: antd.filterReset ?? 'Reset',
        expand: antd.expand ?? own.expandRow,
        collapse: antd.collapse ?? own.collapseRow,
        expandAll: own.expandAll,
        collapseAll: own.collapseAll,
        removeFilter: own.removeFilter,
    };
};
