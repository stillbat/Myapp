import Image from "next/image"

export const Box = ({ }) => {
    return (
        <div style={{ display: "flex", gap: "50px" }}>
            <div
                style={{
                    height: "440px",
                    width: "363px",
                    backgroundColor: "white",
                    borderRadius: "30px",
                    overflow: "hidden",
                    gap: "50px"
                }}>
                <Image src="/r1.png" width={370} height={147} alt="" />
                <div
                    style={{
                        paddingLeft: "24px",
                        paddingBottom: "19px",
                        paddingTop: "10px",
                    }}
                >
                    <p style={{ fontSize: "24px", width: "330px", height: "58px" }}>
                        The Emotional Toll of Being in UX
                    </p>

                    <p style={{ paddingTop: "25px", paddingBottom: "57px" }}>
                        There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                        }} >
                        <Image src="/a1.png" width={45} height={45} alt="" />
                        <p>Wade Warren</p>
                        <p>|</p>
                        <p>2nd January,2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}