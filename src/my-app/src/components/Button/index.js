import React from 'react'

import { Link } from './styles'

function Button({ to, outlined, children, ...rest }) {
    return <Link
        {...rest}
        to={to}
        outlined={outlined}>
        {children}
    </Link>

}

export { Button }