import {TTokenDataAttributes} from "@/core/apollo/types/graphql/graphql";

export enum ETokenAndExpiryLocalStorageKeys {
	refreshToken = 'refreshToken',
	refreshExpiry = 'refreshExpiry',
	accessToken = 'accessToken',
	accessExpiry = 'accessExpiry'
}

interface IGetTokensAndExpiryReturnValue {
	refreshToken: string | null,
	refreshExpiry: string | null,
	accessToken: string | null,
	accessExpiry: string | null
}

export const getTokensAndExpiry = (): IGetTokensAndExpiryReturnValue => {
	return {
		refreshToken: localStorage.getItem(ETokenAndExpiryLocalStorageKeys.refreshToken),
		refreshExpiry: localStorage.getItem(ETokenAndExpiryLocalStorageKeys.refreshExpiry),
		accessToken: localStorage.getItem(ETokenAndExpiryLocalStorageKeys.accessToken),
		accessExpiry: localStorage.getItem(ETokenAndExpiryLocalStorageKeys.accessExpiry),
	}
}

export const setTokensAndExpiry = (tokenData: Omit<TTokenDataAttributes, 'operationMeta'>) => {
	localStorage.setItem(ETokenAndExpiryLocalStorageKeys.accessToken, tokenData.accessToken)
	localStorage.setItem(ETokenAndExpiryLocalStorageKeys.refreshToken, tokenData.refreshToken)
	localStorage.setItem(ETokenAndExpiryLocalStorageKeys.accessExpiry, tokenData.accessTokenTTL)
	localStorage.setItem(ETokenAndExpiryLocalStorageKeys.accessExpiry, tokenData.refreshTokenTTL)
}

export const removeTokensAndExpiry = () => {

}