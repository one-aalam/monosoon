import { rest } from 'msw'
import { USERS } from './fixtures/users'

export const handlers = [
    rest.get(
        `${process.env.REACT_APP_API_URL || ''}/api/people`,
        (req, res, ctx) => {
            return res(
                // Delays response for 2000ms.
                ctx.delay(2000),
                ctx.json(USERS)
            )
        }
    ),
]
