import React from 'react'

import { Link } from './styles'

function Button({ to, outlined, children, isDark, ...rest }) {
    return <Link
        {...rest}
        to={to}
        outlined={outlined}
        isDark={isDark}
        {...rest}
        >
        {children}
    </Link>

}

export { Button }