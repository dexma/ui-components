import React, { createContext } from 'react';

export const DataIdContext = createContext('');

export const DataIdProvider = (props: { children: React.ReactNode; dataId: string }) => {
    const { children, dataId } = props;

    return <DataIdContext.Provider value={dataId}> {children} </DataIdContext.Provider>;
};

DataIdProvider.context = DataIdContext;
