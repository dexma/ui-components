/* eslint-disable camelcase */
import 'moment/locale/ca';
import ca_ES from 'antd/lib/locale-provider/ca_ES';
import 'moment/locale/de';
import de_DE from 'antd/lib/locale-provider/de_DE';
import en_US from 'antd/lib/locale-provider/en_US';
import 'moment/locale/es';
import es_ES from 'antd/lib/locale-provider/es_ES';
// import eu_ES from 'antd/lib/locale/eu_ES'; There's no such translation on antd
import 'moment/locale/fr';
import fr_FR from 'antd/lib/locale-provider/fr_FR';
import 'moment/locale/it';
import it_IT from 'antd/lib/locale-provider/it_IT';
import 'moment/locale/pt';
import pt_PT from 'antd/lib/locale-provider/pt_PT';
import 'moment/locale/tr';
import tr_TR from 'antd/lib/locale-provider/tr_TR';
import 'moment/locale/pt-br';
import pt_BR from 'antd/lib/locale-provider/pt_BR';
import 'moment/locale/el';
import el_GR from 'antd/lib/locale-provider/el_GR';
import 'moment/locale/nl';
import nl_NL from 'antd/lib/locale-provider/nl_NL';
import 'moment/locale/nl-be';
import nl_BE from 'antd/lib/locale-provider/nl_BE';
import 'moment/locale/pl';
import pl_PL from 'antd/lib/locale-provider/pl_PL';
import 'moment/locale/bg';
import bg_BG from 'antd/lib/locale-provider/bg_BG';
import 'moment/locale/da';
import da_DK from 'antd/lib/locale-provider/da_DK';
import 'moment/locale/fi';
import fi_FI from 'antd/lib/locale-provider/fi_FI';
// import no_NO from 'antd/lib/locale/no_NO'; There's no such translation on antd
import 'moment/locale/sl';
import sl_SI from 'antd/lib/locale-provider/sl_SI';
import 'moment/locale/sv';
import sv_SE from 'antd/lib/locale-provider/sv_SE';
import 'moment/locale/zh-cn';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/en-gb';
import en_GB from 'antd/lib/locale-provider/en_GB';

// i18n
export const getLocale = language => {
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
