'use client'
import {FC, useEffect} from 'react'
import {userLogged} from '@/core/apollo/vars'

import {useSearchParams} from 'next/navigation'
import {GLOBAL_CONFIG} from '@/core/config/global-config'
import {useRouter} from 'next/router'
import {getTokensAndExpiry} from '@/shared/function/auth-token-and-expiry.function'


export enum ETokenProcessorPageSearchParams {
    accessToken = 'accessToken',
    refreshToken = 'refreshToken',
    accessTokenTtl = 'accessTokenTtl',
    refreshTokenTtl = 'refreshTokenTtl'
}

const TokenProcessorPage: FC = () => {
    const searchParams = useSearchParams() || new URLSearchParams()

    useEffect(() => {
        if (
            searchParams.has(ETokenProcessorPageSearchParams.accessToken)
            || searchParams.has(ETokenProcessorPageSearchParams.refreshToken)
        ) {
            localStorage.setItem('accessToken', searchParams.get(ETokenProcessorPageSearchParams.accessToken) || '')
            localStorage.setItem('refreshToken', searchParams.get(ETokenProcessorPageSearchParams.refreshToken) || '')
            localStorage.setItem('accessExpiry', searchParams.get(ETokenProcessorPageSearchParams.accessTokenTtl) || '')
            localStorage.setItem('refreshExpiry', searchParams.get(ETokenProcessorPageSearchParams.refreshTokenTtl) || '')
            userLogged(true)
            setTimeout(() => {
                window.location.replace(new URL(
                    window.location.protocol
                    + window.location.host
                    + window.location.pathname,
                ))
            }, 1)
        }

        if (getTokensAndExpiry().accessToken || getTokensAndExpiry().refreshToken) {
            return
        }

        const url = new URL(GLOBAL_CONFIG.entrypointServiceAddress)
        url.searchParams.set('redirectUrl', `${window.location.protocol}//${window.location.host}`)
        window.location.replace(url)
    }, [])

    return null
}

export default TokenProcessorPage