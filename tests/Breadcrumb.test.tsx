import { render } from "@testing-library/react";
import { Breadcrumb } from "index";
import { describe, expect, it } from "vitest";

describe('<Breadcrumb>', () => {
  const items = [
    {
      title: 'Home',
    },
    { title: 'Application Center' },
    { title: 'Application List' },
    { title: 'An Application' },
  ];
  it('Should render the tree component', () => {
    const { container } = render(<Breadcrumb items={items} />);
    expect(container.querySelectorAll('.ant-breadcrumb-link').length).toEqual(4);
    expect(container.querySelectorAll('.ant-breadcrumb-separator').length).toEqual(3);
  });
});