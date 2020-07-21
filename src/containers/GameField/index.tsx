import React, {useEffect, useRef, useState} from 'react';
import io from 'socket.io-client';
import {log} from "util";

const GameFieldContainer:React.FC = () => {

   const CONNECTION_PORT = 'http://localhost:5000/';

   let socket = useRef<any>(null);

   const [messages, setMessages] = useState<string []>([]);

   useEffect(() => {
      socket.current = io(CONNECTION_PORT);

      socket.current.on('message', (message: string) => {
         console.log(message);
         console.log(messages);
         setMessages(prev => [...prev, message]);
      });

      return () => {
         socket.current.emit("disconnect");
         socket.current.off();
      };
   }, []);



   const sendMessage = (): void => {
      socket.current.emit('chatMessage', `Прилетело сообщение ${Math.random() * 10}`);
   };


    return (
      <div>
         Игровое поле
         <div>
            {messages.map(message => <div>{ message }</div>)}
         </div>
         <div>
            <button onClick={sendMessage}>Отправить сообщение</button>
         </div>

      </div>
    );
};

export default GameFieldContainer;