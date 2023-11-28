import Image from "next/image";
import { Star } from "../components/star";

export const FifthSection = () => {
    return (
        <div
            style={{
                backgroundColor: "#F5F7FA",
                margin: "0px",

            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }}
            >
                <div>
                    <h1 style={{ fontSize: "48px", width: "615px", height: "60px" }}>
                        What people say about us
                    </h1>
                    <div style={{ display: "flex", gap: "30px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", backgroundColor: "white", filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.25))", width: "366px", height: "374px" }}>
                            <Star />
                            <p style={{ fontSize: "18px", width: "291px", height: "154px" }}>Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <Image src="/Ellipse.jpg" height={56} width={56} alt="" />
                                <p>Amy Klassen</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", backgroundColor: "white", filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.25))", width: "366px", height: "374px" }}>
                            <Star />
                            <p style={{ fontSize: "18px", width: "291px", height: "154px" }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <Image src="/Ellipse2.jpg" height={56} width={56} alt="" />
                                <p>Jane Cooper</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", backgroundColor: "white", filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.25))", width: "366px", height: "374px" }}>
                            <Star />
                            <p style={{ fontSize: "18px", width: "291px", height: "154px" }}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <Image src="/Ellipse3.jpg" height={56} width={56} alt="" />
                                <p>Eleanor Pena</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", backgroundColor: "white", filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.25))", width: "366px", height: "374px" }}>
                            <Star />
                            <p style={{ fontSize: "18px", width: "291px", height: "154px" }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <Image src="/Ellipse4.jpg" height={56} width={56} alt="" />
                                <p>Amy Klassen</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >

    );
}