import React from 'react'

export default function Text() {
    const handleClick = async () => {
        const res = await fetch("/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Abhik"
            })
        });
        console.log(res)
    }
    return (
        <div>
            <button onClick={handleClick}>Check</button>
        </div>
    )
}
