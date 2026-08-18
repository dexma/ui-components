import { Breadcrumb as BreadCrumbAntD, BreadcrumbProps } from "antd";
import { ConfigProvider } from '@components/ConfigProvider/ConfigProvider';
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import defaultTheme, { color } from '@utils/theme';

export const Breadcrumb = ({ ...props }: BreadcrumbProps) => {
  const th = useContext(ThemeContext) || defaultTheme;
  return (
    <ConfigProvider
        theme={{
        components: {
          Breadcrumb: {
            linkHoverColor: th.primary,
            colorBgTextHover: color.white
          }
        }
      }}
    >
      <BreadCrumbAntD {...props} />
    </ConfigProvider>
  )
};

export default Breadcrumb;