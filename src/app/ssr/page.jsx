
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withPageAuthRequired( 
    async function SSRPage() {
    
        const { user } = await getSession();

        return (
            <>
                <div>
                    <p>This is an SSR page.</p>
                    <br/>
                    <code>{JSON.stringify(user, null, 2)}</code>
                </div>
            </>
        )
    },
    { returnTo: '/ssr' }
);
