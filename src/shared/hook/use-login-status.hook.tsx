'use client'
import {useCallback, useEffect, useLayoutEffect, useState} from 'react'
import {useReactiveVar} from '@apollo/client'
import {getTokensAndExpiry} from '@/shared/function/auth-token-and-expiry.function'
import {userLogged} from '@/core/apollo/vars'


export const useLoginStatus = () => {
    const [loginStatus, setLoginStatus] = useState<boolean>(true)

    const userLoggedVar = useReactiveVar(userLogged)

    useLayoutEffect(() => {
        if (getTokensAndExpiry().refreshExpiry) {
            if (new Date(getTokensAndExpiry().refreshExpiry as string).getTime() < new Date().getTime()) {
                localStorage.clear()
                setLoginStatus(false)
            }
        }

        setLoginStatus((Boolean(
            getTokensAndExpiry().accessExpiry) || Boolean(getTokensAndExpiry().refreshToken,
        )))
    }, [userLoggedVar])

    return loginStatus
}

