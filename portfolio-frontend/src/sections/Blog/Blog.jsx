import React from "react";
import { useTranslation } from "react-i18next";
import SquareCard from "../../components/SquareCard/SquareCard";

function Blog({ posts }) {
  const { t } = useTranslation("sections");

  return (
    <section id="blog" className="mb-12">
      <h2 className="mb-6 text-xl font-semibold underline">{t("blog")}</h2>
      <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts
          ?.slice()
          .reverse()
          .map((post) => (
            <SquareCard key={post.id} {...post} />
          ))}
      </div>
    </section>
  );
}

export default Blog;
