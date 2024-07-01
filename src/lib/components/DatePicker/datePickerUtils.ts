import { type Locale } from 'antd/lib/locale';
import 'moment/locale/ca';
import ca_ES from 'antd/locale/ca_ES';
import 'moment/locale/de';
import de_DE from 'antd/locale/de_DE';
import en_US from 'antd/locale/en_US';
import 'moment/locale/es';
import es_ES from 'antd/locale/es_ES';
// import eu_ES from 'antd/lib/locale/eu_ES'; There's no such translation on antd
import 'moment/locale/fr';
import fr_FR from 'antd/locale/fr_FR';
import 'moment/locale/it';
import it_IT from 'antd/locale/it_IT';
import 'moment/locale/pt';
import pt_PT from 'antd/locale/pt_PT';
import 'moment/locale/tr';
import tr_TR from 'antd/locale/tr_TR';
import 'moment/locale/pt-br';
import pt_BR from 'antd/locale/pt_BR';
import 'moment/locale/el';
import el_GR from 'antd/locale/el_GR';
import 'moment/locale/nl';
import nl_NL from 'antd/locale/nl_NL';
import 'moment/locale/nl-be';
import nl_BE from 'antd/locale/nl_BE';
import 'moment/locale/pl';
import pl_PL from 'antd/locale/pl_PL';
import 'moment/locale/bg';
import bg_BG from 'antd/locale/bg_BG';
import 'moment/locale/da';
import da_DK from 'antd/locale/da_DK';
import 'moment/locale/fi';
import fi_FI from 'antd/locale/fi_FI';
// import no_NO from 'antd/lib/locale/no_NO'; There's no such translation on antd
import 'moment/locale/sl';
import sl_SI from 'antd/locale/sl_SI';
import 'moment/locale/sv';
import sv_SE from 'antd/locale/sv_SE';
import 'moment/locale/zh-cn';
import zh_CN from 'antd/locale/zh_CN';
import 'moment/locale/en-gb';
import en_GB from 'antd/locale/en_GB';

// i18n
export const getLocale = (language: string): Locale => {
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
