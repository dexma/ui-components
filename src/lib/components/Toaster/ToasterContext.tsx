import React from 'react';

import { ToastType } from '@components';

type ToasterContextType = {
    toast: ({ text, type }: { text: string; type: ToastType }) => void;
};

export const ToasterContext = React.createContext<ToasterContextType>({ toast: () => {} });
