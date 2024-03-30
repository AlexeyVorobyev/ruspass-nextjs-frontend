import {ApolloLink} from '@apollo/client'
import {toast} from 'react-toastify'
import {toastSettings} from '@/core/toast/toast-provider.component'

const formatMessage = (message: any): string => {
    if (Array.isArray(message)) {
        return message.reduce((res, item) => res + `\n${item}`)
    }
    return message
}
export const serverErrorAfterware = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
        if (response.errors) {
            toast.error(formatMessage(response.errors[0].message), toastSettings.connectionLost.properties)
        }
        return response
    })
})