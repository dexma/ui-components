import ca_ES from 'antd/locale/ca_ES';
import 'dayjs/locale/ca';
import de_DE from 'antd/locale/de_DE';
import 'dayjs/locale/de';
import en_US from 'antd/es/locale/en_US';
import 'dayjs/locale/en';
import es_ES from 'antd/locale/es_ES';
import 'dayjs/locale/es';
import fr_FR from 'antd/locale/fr_FR';
import 'dayjs/locale/fr';
import it_IT from 'antd/locale/it_IT';
import 'dayjs/locale/it';
import pt_PT from 'antd/locale/pt_PT';
import 'dayjs/locale/pt';
import tr_TR from 'antd/locale/tr_TR';
import 'dayjs/locale/tr';
import pt_BR from 'antd/locale/pt_BR';
import 'dayjs/locale/pt-br';
import el_GR from 'antd/locale/el_GR';
import 'dayjs/locale/el';
import nl_NL from 'antd/locale/nl_NL';
import 'dayjs/locale/nl';
import nl_BE from 'antd/locale/nl_BE';
import 'dayjs/locale/nl-be';
import pl_PL from 'antd/locale/pl_PL';
import 'dayjs/locale/pl';
import bg_BG from 'antd/locale/bg_BG';
import 'dayjs/locale/bg';
import da_DK from 'antd/locale/da_DK';
import 'dayjs/locale/da';
import fi_FI from 'antd/locale/fi_FI';
import 'dayjs/locale/fi';
import sl_SI from 'antd/locale/sl_SI';
import 'dayjs/locale/sl';
import sv_SE from 'antd/locale/sv_SE';
import 'dayjs/locale/sv';
import zh_CN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import en_GB from 'antd/locale/en_GB';
import 'dayjs/locale/en-gb';

// i18n
export const getLocale = (language: string) => {
    switch (language) {
        case 'bg':
            return bg_BG;
        case 'br':
            return pt_BR;
        case 'be':
            return nl_BE;
        case 'ca':
            return ca_ES;
        case 'da':
            return da_DK;
        case 'de':
            return de_DE;
        case 'el':
            return el_GR;
        case 'es':
            return es_ES;
        case 'fi':
            return fi_FI;
        case 'fr':
            return fr_FR;
        case 'it':
            return it_IT;
        case 'nl':
            return nl_NL;
        case 'pl':
            return pl_PL;
        case 'pt':
            return pt_PT;
        case 'sl':
            return sl_SI;
        case 'sv':
            return sv_SE;
        case 'tr':
            return tr_TR;
        case 'us':
            return en_US;
        case 'zh':
            return zh_CN;
        case 'en':
        default:
            return en_GB;
    }
};
