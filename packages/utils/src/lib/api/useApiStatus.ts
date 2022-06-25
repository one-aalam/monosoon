import { useState, useMemo } from 'react'
import { IDLE, apiStatuses, ApiStatus } from './apiStatus'

type Statuses = Record<`is${Capitalize<Lowercase<ApiStatus>>}`, boolean>

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const prepareStatuses = (currentStatus: ApiStatus): Statuses => {
    const statuses = {} as Statuses
    for (const status of apiStatuses) {
        statuses[`is${capitalize(status.toLowerCase())}` as keyof Statuses] = status === currentStatus
    }
    return statuses
}

export const useApiStatus = (currentStatus: ApiStatus = IDLE) => {
    const [status, setStatus] = useState<ApiStatus>(currentStatus)
    const statuses = useMemo(() => prepareStatuses(status), [status])
    return {
        status,
        setStatus, ...statuses,
    }
}
