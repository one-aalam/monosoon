import { useState } from "react"
import { ERROR, PENDING, SUCCESS } from "./apiStatus"
import { useApiStatus } from "./useApiStatus"

interface UseApiConfig<T> { initialData?: T }

type ApiFunction<T = unknown> = (...args: unknown[]) => T | Promise<T>

/* Service Generic Hook */
export function useApi<TData = unknown, TError = unknown>( fn: ApiFunction<TData>,
    config: UseApiConfig<TData> = {}
    ){
    const { initialData } = config
    const [ data, setData ] = useState<TData | undefined>(initialData)
    const [ error, setError ] = useState<TError | unknown>()
    const { status, setStatus, ...statuses } = useApiStatus()

    async function exec<A>(...args: A[]) {
        try {
            setStatus(PENDING)
            const data = await fn(...args)
            setData(data)
            setStatus(SUCCESS)
            return {
                data,
                error: null,
            }
        } catch (error) {
            setError(error)
            setStatus(ERROR)
            return {
                error,
                data: null,
            }
         }
    }

    return {
        data,
        setData,
        status,
        setStatus,
        error,
        exec,
        ...statuses,
    }
}
