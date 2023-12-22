"use client";
import { app } from "@/app/firebase";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ChangeEventHandler, useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [firstimage, setFirstimage] = useState<File>();
  const [avatarimage, setAvatarimage] = useState<File>();
  const [personname, setPersonname] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const db = getFirestore(app);
  const storage = getStorage(app);

  const handleSaveToFirestoreButton = async () => {
    setLoading(true);
    const storageRef = ref(storage, firstimage?.name);
    const avatarStorageRef = ref(storage, avatarimage?.name);
    await uploadBytes(storageRef, firstimage as Blob);
    await uploadBytes(avatarStorageRef, avatarimage as Blob);
    const urlfirstimage = await getDownloadURL(storageRef);
    const urlAvatarImage = await getDownloadURL(avatarStorageRef);

    await addDoc(collection(db, "blog"), {
      title: title,
      description: description,
      firstimage: urlfirstimage,
      avatarimage: urlAvatarImage,
      personname: personname,
      date: date,
    });
    setLoading(false);
  };

  const handleTitleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setTitle(e.target.value);
  };

  return (
    <main>
      <h1>вэб хуудаснаас датаг firebase-д хэрхэн оруулах</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingLeft: "10px",
        }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Title"
            variant="outlined"
            onChange={handleTitleChange}
          />
          <TextField
            label="Description"
            variant="filled"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => {
              setPersonname(e.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Date"
            variant="filled"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <Button component="label" variant="contained">
            Choose First Image file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => {
                setFirstimage(e.target.files[0]);
              }}
            />
          </Button>
          <Button component="label" variant="contained">
            Choose Avatar Image file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => {
                setAvatarimage(e.target.files[0]);
              }}
            />
          </Button>
          <div>
            <Button variant="contained" onClick={handleSaveToFirestoreButton}>
              {loading ? <div>Loading...</div> : <div>Save to firestore</div>}
            </Button>
          </div>
        </Box>
      </div>
    </main>
  );
}
