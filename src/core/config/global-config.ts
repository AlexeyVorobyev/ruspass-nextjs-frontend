type TConfig = {
    apiAuthServiceAddress: string,
    entrypointServiceAddress: string
}


export const GLOBAL_CONFIG: TConfig = {
    apiAuthServiceAddress: process.env.NEXT_PUBLIC_API_AUTH_SERVICE_ADDRESS || 'http://localhost:3000',
    entrypointServiceAddress: process.env.NEXT_PUBLIC_ENTRYPOINT_SERVICE_ADDRESS || 'http://localhost:3000',
}
