
"use client"
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { app } from '@/app/firebase';


const db = getFirestore(app);



export default function Home() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [firstimage, setFirstimage] = useState("");
    const [avatarimage, setAvatarimage] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    return (
        <main>

            <h1>вэб хуудаснаас датаг firebase-д хэрхэн оруулах</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    paddingLeft: "10px"
                }}>
                <p>
                    {JSON.stringify({
                        name: title,
                        hometown: description,
                        lala: firstimage,
                        didi: avatarimage,

                    })}
                </p>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField id="outlined-basic" label="Title" variant="outlined"
                        onChange={e => { setTitle(e.target.value); }}
                    />
                    <TextField id="filled-basic" label="Description" variant="filled"
                        onChange={e => { setDescription(e.target.value); }}
                    />
                    <TextField id="outlined-basic" label="Firstimage" variant="outlined"
                        onChange={e => { setFirstimage(e.target.value); }}
                    />
                    <TextField id="filled-basic" label="Avatarimage" variant="filled"
                        onChange={e => { setAvatarimage(e.target.value); }}
                    />
                    <TextField id="outlined-basic" label="Name" variant="outlined"
                        onChange={e => { setName(e.target.value); }}
                    />
                    <TextField id="filled-basic" label="Date" variant="filled"
                        onChange={e => { setDate(e.target.value); }}
                    />
                    <div>

                        <Button variant="contained" onClick={async () => {
                            await addDoc(collection(db, "blog"), {
                                title: title,
                                description: description,
                                firstimage: firstimage,
                                avatarimage: avatarimage,
                                name: name,
                                date: date,
                            });
                        }}>Save to Firestore
                        </Button>
                    </div>
                </Box>

            </div>
        </main>
    )
}