import { CardBlack } from "../Card";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog__ctn container-fluid mt-4">
      <div className="p-md-2">
        <h2>Interview Preparation Tips</h2>
        <div className="card__container">
          <CardBlack
            gambar="https://source.unsplash.com/user/merakist"
            title="How to Answer Interview Questions?"
          />
          <CardBlack
            gambar="https://source.unsplash.com/user/kmuza"
            title="How to Prepare for an Interview?"
          />
          <CardBlack
            gambar="https://source.unsplash.com/user/campaign_creators"
            title="How to Introduce Yourself in an Interview?"
          />
          <CardBlack
            gambar="https://source.unsplash.com/user/hostreviews"
            title="How to Walk in Interview"
          />
          <CardBlack
            gambar="https://source.unsplash.com/user/marvelous"
            title="How to Follow up an Interview Email"
          />
          <CardBlack
            gambar="https://source.unsplash.com/random"
            title="Prepare for a coding interview"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
