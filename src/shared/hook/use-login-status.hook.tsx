'use client'
import {useEffect, useState} from 'react'
import {useReactiveVar} from '@apollo/client'
import {getTokensAndExpiry} from '@/shared/function/auth-token-and-expiry.function'
import {userLogged} from '@/core/apollo/vars'

const checkStatus = () => {
    if (getTokensAndExpiry().refreshExpiry) {
        if (new Date(getTokensAndExpiry().refreshExpiry as string).getTime() < new Date().getTime()) {
            localStorage.clear()
            return false
        }
    }
    return (
        Boolean(getTokensAndExpiry().accessToken) || Boolean(getTokensAndExpiry().refreshToken)
    )
}

export const useLoginStatus = () => {
    const userLoggedVar = useReactiveVar(userLogged)

    const [loginStatus, setLoginStatus] = useState<boolean>(userLoggedVar)

    useEffect(() => {
        setLoginStatus(checkStatus())
    }, [userLoggedVar])

    return loginStatus
}

