'use client'
import { ReactNode } from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
// import RQProvider from "./rqProvider";
import RtlProvider from "./rtlProvider";
import CustomThemeProvider from "./themeProvider";
// import ToastProvider from "./toastProvider";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <CustomThemeProvider>
        <RtlProvider>
          {/* <RQProvider>
          <ToastProvider> */}
            {children}
            {/* </ToastProvider>
          </RQProvider> */}
        </RtlProvider>
      </CustomThemeProvider>
    </AppRouterCacheProvider>
  );
};
