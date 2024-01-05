"use client";

import BackgroundImage from "../../public/r9.png";
import { ChangeEventHandler, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);
    const router = useRouter();
    const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => { setEmail(e.target.value) };
    const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => { setPassword(e.target.value) };
    const handleSignUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            router.push("/login");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundImage: `url(${BackgroundImage.src})`,
        }}
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "32px 32px 32px 32px",
                backgroundColor: "rgba(235, 235, 235, 1)",
                width: "280px",
                height: "350px",
                borderRadius: "16px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    alignItems: "left",
                    padding: "32px 32px 32px 32px",
                    backgroundColor: "white",
                    borderRadius: "16px",
                    gap: "20px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <label style={{ opacity: "50%", fontSize: "10px" }}>Email</label>
                        <input type="email" placeholder="" onChange={handleEmailChange}
                            style={{
                                padding: "15px",
                                margin: "10px, 0px",
                                borderRadius: "2px",
                                border: "1px solid rgba(102, 102, 102, 0.35)",
                                width: "180px"
                            }}
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <label style={{ opacity: "50%", fontSize: "10px" }}>Password</label>
                        <input type="password" placeholder="" onChange={handlePasswordChange}
                            style={{
                                padding: "15px",
                                margin: "10px, 0px",
                                borderRadius: "2px",
                                border: "1px solid rgba(102, 102, 102, 0.35)",
                                width: "180px"
                            }}
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <label style={{ opacity: "50%", fontSize: "10px" }}>Birthday</label>
                        <input type="date" placeholder=""
                            style={{
                                opacity: "50%",
                                borderRadius: "2px",
                                padding: "15px",
                                margin: "10px, 0px",
                                border: "1px solid rgba(102, 102, 102, 0.35)",
                                width: "180px"
                            }}
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <button onClick={handleSignUp}
                            style={{
                                width: "100%",
                                padding: "15px",
                                margin: "10px, 0px",
                                borderRadius: "2px",
                                border: "1px solid rgba(102, 102, 102, 0.35)"
                            }}
                        >Sign Up</button>
                    </div>
                </div>
            </div >
        </div>
    );
};