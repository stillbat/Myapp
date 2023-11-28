import Image from "next/image";
import { NavigationBar } from "../components/navigation-bar";
import { Box } from "./box";

export default function Home() {
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
            <Box />
        </div>
    );
}