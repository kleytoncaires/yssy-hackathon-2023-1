import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Head>
				<title>Yssy</title>
				<meta name='description' content='Yssy' />
				<link rel='icon' href='/favicon.svg' />
			</Head>

			<Component {...pageProps} />
		</ThemeProvider>
	);
}
