import type {Metadata} from 'next'
import './globals.css'
import {ReactNode, Suspense} from 'react'
import {LoginShell} from '@/core/login/login-shell.component'
import {ToastProvider} from '@/core/toast/toast-provider.component'
import {ApolloProviderWithClient} from '@/core/apollo/apollo-provider-with-client'


export const metadata: Metadata = {
    title: 'RUSSPASS',
    description: 'RUSSPASS Main page',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Suspense>
            <ToastProvider>
                <ApolloProviderWithClient>
                    <LoginShell>
                        {children}
                    </LoginShell>
                </ApolloProviderWithClient>
            </ToastProvider>
        </Suspense>
        </body>
        </html>
    )
}
