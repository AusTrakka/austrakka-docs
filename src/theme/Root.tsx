import React, { ReactNode, useEffect } from 'react';

import { getGlobalStyles, getTheme } from '@site/src/theme/Theme';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { useEnvConfig } from '@site/src/config/siteConfig';

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  const config = useEnvConfig();

  useEffect(() => {
    document.title = `${config.brandingName} Documentation`;
  });

  return (
    <ThemeProvider theme={getTheme(
      config.colourPrimary,
      config.colourPrimary,
      config.colourPrimary,
    )}
    >
      <GlobalStyles styles={getGlobalStyles(
        config.colourPrimary,
        config.colourPrimaryDark,
        config.colourPrimaryDarker,
        config.colourPrimaryDarkest,
        config.colourPrimaryLight,
        config.colourPrimaryLighter,
        config.colourPrimaryLightest,
        config.colourBackground,
        config.colourSecondaryTeal,
        config.colourPrimaryGrey200,
        config.colourSecondaryMain,
      )}
      />
      {children}
    </ThemeProvider>
  );
}
