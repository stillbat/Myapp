"use client";
import { NavigationBar } from "@/app/components/navigation-bar";
import { app } from "@/app/firebase";
import { Footer } from "@/app/first-page/footer";
import { doc, getFirestore } from "firebase/firestore";
import Image from "next/image";
import { useDocument } from "react-firebase-hooks/firestore";

export default function BigPost({ params }: { params: { id: string } }) {
  const id = params.id;
  const [value, loading] = useDocument(doc(getFirestore(app), "blog", id), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const { title, description, firstimage, avatarimage, name, date } =
    value?.data() || {};

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <NavigationBar type="fakeblog" />
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Image src={avatarimage} width={45} height={45} alt="" />
        <p>{name}</p>
        <p>|</p>
        <p>{date}</p>
      </div>
      <div>
        <Image src={firstimage} width={900} height={450} alt="" />
        <p style={{ fontSize: "18px" }}>
          If you’re thinking of starting a blog of your own, but just don’t have
          a clue on what to blog about, then fear not! In this article, I have
          included a whole load of blog examples from a wide variety of
          different niches, all run on different blogging platforms like
          WordPress, Joomla! and Drupal. Since the beginning of the internet,
          millions and millions and millions of blogs have been created. Many
          have died due to lost interest or their owners giving up on the idea,
          while others have thrived and continue to grow, making money and
          earning their owners a steady income. It’s a constant evolution of
          content that keeps people coming back for more, especially if these
          blogs contact highly resourceful material that people find useful and
          interesting. Each example listed in this blog post are all different
          in some way and all bring something unique to their readers &
          subscribers. I want to show you what is possible and how you can take
          inspiration from them and create an awesome blog of your own. Some of
          these blogs make over $100k a month, others are just a hobby for their
          owners, but all have the same purpose at their core… the love of
          writing and sharing information. Some of these blogs make over $100k a
          month, others are just a hobby for their owners, but all have the same
          purpose at their core… the love of writing and Some of these blogs
          make over $100k a month, others are just a hobby for their owners, but
          all have the same purpose at their core… the love of writing and
          sharing information. Some of these blogs make over $100k a month,
          others are just a hobby for their owners, but all have the same
          purpose at their core… the love of writing and sharing information.
        </p>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <Image src={avatarimage} width={45} height={45} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>written by</p>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
