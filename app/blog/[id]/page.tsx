import { NavigationBar } from "@/app/components/navigation-bar";
import { Footer } from "@/app/first-page/footer";
import Image from "next/image";

export default function BigPost() {
    return (
        <div>
            <NavigationBar />
            <h1>10 Secrets for managing a remote team </h1>
            <div style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
            }}
            >
                <Image src="/a1.png" width={45} height={45} alt="" />
                <p>dorj</p>
                <p>|</p>
                <p>January, 10th, 2024</p>

            </div>
            <div>
                <Image src="/imagezzz.png" width={900} height={450} alt="" />
                <p style={{ fontSize: "18px" }}>
                    If you’re thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not!
                    In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on 
                    different blogging platforms like WordPress, Joomla! and Drupal.
                    Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died 
                    due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making 
                    money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back 
                    for more, especially if these blogs contact highly resourceful material that people find useful and interesting.
                    Each example listed in this blog post are all different in some way and all bring something unique to their readers 
                    & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome 
                    blog of your own.
                    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose 
                    at their core… the love of writing and sharing information.
                    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose 
                    at their core… the love of writing and
                    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose 
                    at their core… the love of writing and sharing information.
                    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose 
                    at their core… the love of writing and sharing information.
                </p>
            </div>
            <div style={{
                display: "flex",
                // gap: "10px",
                // alignItems: "center",
            }}
            >
                <Image src="/a1.png" width={45} height={45} alt="" />
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <p>witten by</p>
                    <p>Julie Klassen</p>
                    <p>Ceo Team App</p>
                </div>

            </div>
            <Footer />
        </div>
    );
}