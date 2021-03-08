import Card from "../Card";

const Job = () => {
  return (
    <section className="container-fluid mt-4">
      <div className="p-md-2">
        <h2>Daily Job Information</h2>
        <div className="card__container">
          <Card
            gambar="https://source.unsplash.com/user/airfocus"
            title="Digital Marketing - Shappee"
          />
          <Card
            gambar="https://source.unsplash.com/user/windows"
            title="Product Manager - Tokonyadia"
          />
          <Card
            gambar="https://source.unsplash.com/user/andrewruiz"
            title="Photographer - National Geographic"
          />
          <Card
            gambar="https://source.unsplash.com/user/photosbychalo"
            title="Makeup Artist - SumoStory"
          />
          <Card
            gambar="https://source.unsplash.com/user/thisisengineering"
            title="Engineer - Bukalahmak"
          />
          <Card
            gambar="https://source.unsplash.com/user/hackcapital"
            title="Software Engineer - Pooopeee"
          />
        </div>
      </div>
    </section>
  );
};

export default Job;
