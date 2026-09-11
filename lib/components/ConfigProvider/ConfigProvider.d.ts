import { ComponentProps } from '../../../../node_modules/react';
import { ConfigProvider as ConfigProviderAntd } from 'antd';
export type ConfigProviderProps = ComponentProps<typeof ConfigProviderAntd>;
/**
 * antd's ConfigProvider with the platform type stack injected.
 *
 * antd emits its own `font-family` on `.ant-*` class roots from `token.fontFamily` (default: a
 * system stack), so antd-backed components do not inherit the family from `body`. Without this,
 * every Table / Select / DatePicker would keep the old font while the rest of the app renders
 * Montserrat. antd merges tokens into nested providers, so mounting this once at an app root also
 * covers the per-component providers inside the library.
 *
 * A caller-supplied `theme.token.fontFamily` still wins.
 */
export declare const ConfigProvider: ({ theme, children, ...props }: ConfigProviderProps) => import("react/jsx-runtime").JSX.Element;
export default ConfigProvider;
