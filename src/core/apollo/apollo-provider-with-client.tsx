'use client'
import {FC, ReactNode} from 'react'
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'

import {ApolloGetAuthRefreshDocument} from '@/core/apollo/types/graphql/graphql'
import {
    ETokenAndExpiryLocalStorageKeys,
    getTokensAndExpiry,
    setTokensAndExpiry,
} from '@/shared/function/auth-token-and-expiry.function'
import {serverErrorAfterware} from '@/core/apollo/afterware/server-error-afterware'
import {GLOBAL_CONFIG} from '@/core/config/global-config'


interface IApolloProviderWithClientProps {
    children: ReactNode
}

export const ApolloProviderWithClient: FC<IApolloProviderWithClientProps> = ({
                                                                                 children,
                                                                             }) => {

    const httpLink = createHttpLink({
        uri: GLOBAL_CONFIG.apiAuthServiceAddress,
    })

    const authLink = setContext((_, {headers}) => {
        console.log(parseInt(getTokensAndExpiry().accessExpiry!), Date.parse(new Date().toUTCString()))
        if (parseInt(getTokensAndExpiry().accessExpiry!) < Date.parse(new Date().toUTCString())) {
            defaultClient.query({
                query: ApolloGetAuthRefreshDocument,
                variables: {
                    input: {
                        token: getTokensAndExpiry().refreshToken!,
                    },
                },
            }).then((response) => {
                setTokensAndExpiry(response.data.auth.refresh)
                window.location.reload()
            })
        }

        const token = localStorage.getItem(ETokenAndExpiryLocalStorageKeys.accessToken)

        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : '',
            },
        }
    })

    const defaultClient = new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(
            serverErrorAfterware.concat(
                httpLink,
            ),
        ),
    })

    return (
        <ApolloProvider client={defaultClient}>
            {children}
        </ApolloProvider>
    )
}