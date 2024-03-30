'use client'
import {FC, ReactNode} from 'react'
import {useLoginStatus} from '@/shared/hook/use-login-status.hook'
import {TokenProcessorPage} from '@/pages/token-processor/token-processor-page.component'


interface ILoginShellProps {
    children: ReactNode
}

export const LoginShell: FC<ILoginShellProps> = ({children}) => {
    const loginStatus = useLoginStatus()

    return (<>
        {loginStatus ? (
            children
        ) : (
            <TokenProcessorPage/>
        )}
    </>)
}