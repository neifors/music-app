import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const URL = "http://localhost:3000/";
let socket= io(URL);

export function QuizzlyBears() {

   const [socketId, setSocketId] = useState("")
   const [lobbiesToRender, setLobbiesToRender] = useState()
   const [currentLobby, setCurrentLobby] = useState("")


   const createLobby = (e) => {
      e.preventDefault()
      
      const lobbyName = e.target['create'].value
      socket.emit("join-lobby", lobbyName)

      // setLobbies(lobbies => [...lobbies, `${lobbyName}`]);
      socket.emit("update-lobbies", lobbyName)
      setCurrentLobby(lobbyName)
      // setLobbies(lobbies.push(lobbies))
   }

   const joinLobby = (e) => {
      e.preventDefault()
      const lobbyName = e.target['join'].value
      if(lobbiesToRender.includes(lobbyName)){
         socket.emit("join-lobby", lobbyName)
         setCurrentLobby(lobbyName)
      } else {
         console.log("This lobby doesn't exist")
      }
   }

   const createGame = () => {
      const data = {
         amount : 10,
         category: 11,
         difficulty: "easy",
         type: "boolean"
      }
      socket.emit("create-game", data, currentLobby)
   }

   const finishGame = () => {

      const data = {
         lobby_id: socket.id,
         config: {
            amount: 10,
            category: 11,
            difficulty: "easy",
            type: "boolean"
         },
         winner: {
            user_id: "625a8f917196eb1fecf03c03",
            points: 36
         },
         looser: {
            user_id: "625a90bb35a40d43d86054b4",
            points: 12
         }
      }
      socket.emit("save-game", data)

      // Close socket ??
   }

   const renderLobbies = lobbies => {
      let counter = 0

      return lobbies.map( lobby => {
                           counter++;
                           return (<li key={counter}>{lobby}</li>);
                        })
   }

   
   socket.on('updated-lobbies', data => {
      setLobbiesToRender(data)
   })
   socket.on('questions-set', data => {
      console.log(data)
   })
   socket.on("socket-id", id => setSocketId(id))

   

   return(
      <>
         <h3>Your socket id: {socketId}</h3>
         <p>{currentLobby && `Your current Lobby is: ${currentLobby}`}</p>
         {lobbiesToRender && !currentLobby && <h4>List of Lobbies:</h4>}
         <ul>{lobbiesToRender && !currentLobby  && renderLobbies(lobbiesToRender)}</ul>
         <form onSubmit={createLobby}>
            <input type="text" name="create" placeholder="New name"/>
            <input type="submit" value="Create lobby"/>
         </form>
         <form onSubmit={joinLobby}>
            <input type="text" name="join" placeholder="Lobby name"/>
            <input type="submit" value="Join lobby"/>
         </form>
         <button onSubmit={createGame}>Create game</button>
         <button onSubmit={finishGame}>Finish game</button>

      </>
   )

}
