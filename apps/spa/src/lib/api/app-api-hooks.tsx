import { useEffect, useState } from "react"
import { api, type APICallStatus } from "./api"

/* Service-Specific Hook */
/* Example
  const { loading, users } = usePeople()
  Prefer `useApi` from `utils` as this will lead to repetitive code
*/
export const usePeople = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState<APICallStatus>('IDLE')

    useEffect(() => {
        setLoading('PENDING')
        api.get(`/api/people`).then(res => {
            setUsers(res.data)
            setLoading('SUCCESS')
        });
    }, [])

    return {
        loading: loading === 'IDLE' || loading === 'PENDING',
        users
    }
}
