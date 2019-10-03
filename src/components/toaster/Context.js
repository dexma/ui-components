import React from 'react';

const ToasterContext = React.createContext();
export const ToasterProvider = ToasterContext.Provider;
export const ToasterConsumer = ToasterContext.Consumer;
