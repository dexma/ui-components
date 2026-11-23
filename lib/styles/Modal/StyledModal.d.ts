import { ModalProps as AntDModalProps } from 'antd';
import { Theme } from '../../utils/theme';
type ModalProps = AntDModalProps & {
    theme: Theme;
};
declare const StyledModal: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<AntDModalProps, ModalProps>> & string & Omit<import('../../../../node_modules/react').FC<AntDModalProps> & import('antd/es/modal/confirm').ModalStaticFunctions & {
    useModal: typeof import('antd/es/modal/useModal').default;
    destroyAll: () => void;
    config: typeof import('antd/es/modal/confirm').modalGlobalConfig;
    _InternalPanelDoNotUseOrYouWillBeFired: (props: any) => React.JSX.Element;
}, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
declare const StyledModalGlobal: import('../../../../node_modules/react').NamedExoticComponent<import('styled-components').ExecutionProps & object>;
export { StyledModal, StyledModalGlobal };
