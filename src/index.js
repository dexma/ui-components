import createCache from '@emotion/cache';
import { NonceProvider } from 'react-select';
import {
  GlobalStyle,
  IsolatedGlobalStyle,
  UIComponentsStyle,
} from './styles/global';
import { color as colors } from './styles/theme';

import {
  ISO_FORMAT,
  DATE_RANGE,
  day,
  today,
  yesterday,
  last7Days,
  last28Days,
  currentMonth,
  lastMonth,
  yearToDate,
  previousYear,
} from './utils/dates';

export { default as Alert } from './components/Alert';
export { default as AntdSelect } from './components/AntdSelect/AntdSelect';
export { default as Button } from './components/Button';
export { default as ButtonGroup } from './components/Button';
export { default as Card } from './components/Card';
export { default as Cell } from './components/Cell';
export { default as Checkbox } from './components/Checkbox';
export { default as Chart } from './components/Chart';
export { default as DatePicker } from './components/DatePicker';
export { default as Divider } from './components/Divider';
export { default as Dots } from './components/Dots';
export { default as Dropdown } from './components/Dropdown';
export { default as FieldGroup } from './components/FieldGroup';
export { default as FormControl } from './components/FormControl';
export { default as Gauge } from './components/Gauge';
export { default as Grid } from './components/Grid';
export { default as Heading } from './components/Heading';
export { default as Icon } from './components/Icon';
export { default as Input } from './components/Input';
export { default as Loading } from './components/Loading';
export { default as Modal } from './components/Modal';
export { default as Pagination } from './components/Pagination';
export { default as Paragraph } from './components/Paragraph';
export { default as Popover } from './components/Popover';
export { default as Progress } from './components/Progress';
export { default as Result } from './components/Result';
export { default as Row } from './components/Row';
export { default as Select } from './components/Select';
export { default as Spinner } from './components/Spinner';
export { default as Switch } from './components/Switch';
export { default as SwitchPeriodComparative } from './components/SwitchPeriodComparative';
export { default as Table } from './components/Table';
export { Tabs } from './components/Tabs';
export { TabPane } from './components/Tabs';
export { default as Tag } from './components/Tag';
export { default as TagGroup } from './components/TagGroup';
export { default as Theme } from './components/Theme';
export { default as Toaster } from './components/Toaster/Toaster';
export { default as ToasterContext } from './components/Toaster/ToasterContext';
export { default as Toast } from './components/Toaster/Toast';
export { ToastType } from './components/Toaster/Toast';
export { default as Tooltip } from './components/Tooltip';
export { default as SectionData } from './components/Section/SectionData';
export { DataIdProvider } from './components/DataId/DataIdProvider';

export { ConfigProvider } from 'antd';
export class SelectNonceProvider extends NonceProvider {
  createEmotionCache = nonce =>
    createCache({ nonce, container: this.props.container });
}

export {
  ISO_FORMAT,
  DATE_RANGE,
  day,
  today,
  yesterday,
  last7Days,
  last28Days,
  currentMonth,
  lastMonth,
  yearToDate,
  previousYear,
  GlobalStyle,
  IsolatedGlobalStyle,
  UIComponentsStyle,
  colors,
};
