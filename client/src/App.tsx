import { useEffect, useRef, useState } from 'react';

import { io } from 'socket.io-client';

function App() {
    const inputRef = useRef<null | HTMLInputElement>(null);
    const socket = io('localhost:2915');

    const [messages] = useState<string[]>([]);

    // , setMessages

    useEffect(() => {
        socket.emit('hello', 'some data ');
    }, []);

    return (
        <>
            <div>
                <div>
                    {messages.map((message) => (
                        <div>{message}</div>
                    ))}
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(`pre emit ${inputRef.current?.value}`);
                        socket.emit('chat', inputRef.current?.value);
                    }}
                >
                    <input ref={inputRef} type='text' name='messge' />
                    <button type='submit'> Send </button>
                </form>
            </div>
        </>
    );
}

export default App;
