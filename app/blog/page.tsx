"use client"
import { NavigationBar } from "../components/navigation-bar";
import { app } from "../firebase";
import { Blogitem } from "./blog-item";

import { collection, getFirestore } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';




export default function Home() {
    const [value, loading, error] = useCollection(
        collection(getFirestore(app), 'blog'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    return (
        <div style={{ backgroundColor: "lightgrey" }}>
            <NavigationBar />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                    style={{
                        fontSize: "48px",
                        width: "246px",
                        height: "60px",
                        top: "160px",
                        left: "140px"
                    }}
                >
                    Blog posts
                </p>
                <p
                    style={{
                        fontSize: "18px",
                        width: "480px",
                        height: "29px",
                        top: "240px",
                        left: "140px",
                        color: "rgba(109, 125, 139, 1)"

                    }}
                >
                    Our latest updates and blogs about managing your team
                </p>
            </div>
            <div  style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <main
                    style={{
                        height: "100vh",
                        width: "100vw",
                        display: "flex",
                        backgroundColor: "#d3d3d3",
                        flexWrap: "wrap",
                        gap: "10px",
                    }}
                >
                    {value && (
                        <span>
                            Collection:{' '}
                            {value.docs.map((doc) => (
                                <div style={{display: "flex"}} 
                                key={doc.id}>
                                    <Blogitem
                                        title={doc.data().title}
                                        description={doc.data().description}
                                        firstimage={doc.data().firstimage}
                                        avatarimage={doc.data().avatarimage}
                                        name={doc.data().name}
                                        date={doc.data().date}
                                    />

                                </div>
                            ))}
                        </span>
                    )}
                </main>
            </div>
        </div>
    );
}