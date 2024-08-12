'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import RtlProvider from "./rtlProvider";
import CustomThemeProvider from "./themeProvider";

export const Providers = ({ children }: { children: React.ReactElement }) => {
  return (
    <AppRouterCacheProvider>
      <CustomThemeProvider>
        <RtlProvider>
            {children}
        </RtlProvider>
      </CustomThemeProvider>
    </AppRouterCacheProvider>
  );
};
