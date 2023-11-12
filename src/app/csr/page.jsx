'use client'

import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired( function CSRPage() {

    const { user, isLoading } = useUser();

    return (
        <>
            <p>This is a CSR page.</p>
            <br/>
            <code>{JSON.stringify(user, null, 2)}</code>
        </>
    )
})