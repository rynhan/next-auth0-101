'use client'

export default async function UserAPI() {

    async function klik() {
        const res = await fetch('/api/chat')
        const data = await res.json()
        console.log(data);
    }

    return <button onClick={klik}>Klik</button>
}