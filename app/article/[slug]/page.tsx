"use client";
import Image from "next/image";
import Link from "next/link";

// Liste des articles (dans un vrai projet, tu récupères les données depuis une API ou une base de données)

const ArticlePage = () => {
  return (
    <>
      <div>
        <Image
          src="/images/agency.jpg"
          width={1000}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="container">
        <div></div>
        <Link href="../../fr/Blog/">
          <button className="mt-6  bg-[#EAC258] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#c79d46]">
            Retour aux articles
          </button>
        </Link>
      </div>
    </>
  );
};

export default ArticlePage;
