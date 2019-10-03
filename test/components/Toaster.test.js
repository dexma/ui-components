import React from 'react';
import { mount } from 'enzyme';

import { Toaster, ToasterConsumer, ToastType } from 'components/toaster';

describe('<Toaster>', () => {
  it('Should render a toast element when call toast', () => {
    let toastFunction = null;
    const toaster = mount(
      <Toaster>
        <ToasterConsumer>
          { context => toastFunction = context.toast }
        </ToasterConsumer>
      </Toaster>
        );
    toastFunction({ text: 'some alert', type: ToastType.INFO });
    toaster.update();
    expect(toaster.find('.toast').length).toEqual(1);
  });
  it('Should render nothing if toast not called', () => {
    const toaster = mount(
      <Toaster>
        <ToasterConsumer>
          { () => {} }
        </ToasterConsumer>
      </Toaster>
    );
    expect(toaster.find('.toast').length).toEqual(0);
  });
  it('Should render text passed', () => {
    let toastFunction = null;
    const toaster = mount(
      <Toaster>
        <ToasterConsumer>
          { context => toastFunction = context.toast }
        </ToasterConsumer>
      </Toaster>
    );
    toastFunction({ text: 'expected text', type: ToastType.ERROR });
    toaster.update();
    expect(toaster.text()).toEqual('expected text');
  });
});
