
"use client"
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { getFirestore } from "firebase/firestore";
import { app } from '@/app/firebase';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";




const db = getFirestore(app);

export default function Home() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [firstimage, setFirstimage] = useState();
    const [avatarimage, setAvatarimage] = useState();
    const [personname, setPersonname] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);
    const firestore = getFirestore(app);
    const storage = getStorage(app);
    
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

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
                        title: title,
                        description: description,
                        personname: personname,
                        date: date,

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
                    <TextField id="outlined-basic" label="Name" variant="outlined"
                        onChange={e => { setPersonname(e.target.value); }}
                    />
                    <TextField id="filled-basic" label="Date" variant="filled"
                        onChange={e => { setDate(e.target.value); }}
                    />
                    <div
                        style={{
                            display: "flex", gap: "20px"
                        }}>
                        <div>
                            <Button component="label" variant="contained">
                                Choose firstImage file
                                <VisuallyHiddenInput type="file" onChange={(e) => { setFirstimage(e.target.files[0]); }} />
                            </Button>
                        </div>
                        <div>
                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}
                                onClick={async () => {
                                    const storageRef = ref(storage, firstimage?.name);
                                    await uploadBytes(storageRef, firstimage).then((snapshot) => {
                                        console.log("Upload a blob or a file");
                                    })
                                    const urlfirstimage = await getDownloadURL(storageRef)
                                    console.log(urlfirstimage)
                                    await addDoc(collection(firestore, "blog"),{urlfirstimage,});
                                }}>Upload firstImage
                            </Button>
                        </div>

                        <div>
                            <Button component="label" variant="contained" >
                                Choose avatarimage file
                                <VisuallyHiddenInput type="file" onChange={(e) => { setAvatarimage(e.target.files[0]); }} />
                            </Button>
                        </div>
                        <div>
                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}
                                onClick={async () => {
                                    
                                }}>Upload avatarimage
                            </Button>
                        </div>

                    </div>
                    <div>

                        {/* <input type="file" onChange={handleFileChange}/>
                        <Button onClick={handleButtonClick}>Upload to storage</Button>
                        <Button onClick={handleCreateFirestoreDocument}>Create firestore document</Button> */}
                        
                        <Button variant="contained" onClick={async () => {
                            await addDoc(collection(db, "blog"), {
                                title: title,
                                description: description,
                                firstimage: firstimage,
                                avatarimage: avatarimage,
                                personname: personname,
                                date: date,
                            });
                            await addDoc(collection(firestore, "blog"), {
                              

                            });
                            setLoading
                        }}>{loading ?
                            <div>
                                Loading...
                            </div> : <div>Save to firestore</div>}

                        </Button>
                    </div>
                </Box>

            </div>
        </main>
    )
}