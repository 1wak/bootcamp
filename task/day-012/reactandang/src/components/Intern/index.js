import Card from "../Card";

const Intern = () => {
  return (
    <section className="container-fluid">
      <div className="p-md-2">
        <h2>All Virtual Internships</h2>
        <p>There are many variations of passages of Lorem Ipsum available.</p>
        <div className="card__container">
          <Card
            gambar="https://source.unsplash.com/user/austindistel"
            title="Digital Marketing by Tokonyadia"
          />
          <Card
            gambar="https://source.unsplash.com/user/goumbik"
            title="Digital Marketing by Tokonyadia"
          />
          <Card
            gambar="https://source.unsplash.com/user/firmbee"
            title="Digital Marketing by Tokonyadia"
          />
          <Card
            gambar="https://source.unsplash.com/user/nordwood"
            title="Digital Marketing by Tokonyadia"
          />
          <Card
            gambar="https://source.unsplash.com/user/frostroomhead"
            title="Digital Marketing by Tokonyadia"
          />
        </div>
      </div>
      <div className="p-md-2">
        <h2>Software Engineer Virtual Internships</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="card__container">
          <Card
            gambar="https://source.unsplash.com/user/wocintechchat"
            title="Digital Marketing by Tokonyadia"
          />
          <Card
            gambar="https://source.unsplash.com/user/sincerelymedia"
            title="Digital Marketing by Tokonyadia"
          />
          <Card
            gambar="https://source.unsplash.com/user/tranmautritam"
            title="Digital Marketing by Tokonyadia"
          />
          <Card
            gambar="https://source.unsplash.com/user/nubelsondev"
            title="Digital Marketing by Tokonyadia"
          />
          <Card
            gambar="https://source.unsplash.com/user/kellysikkema"
            title="Digital Marketing by Tokonyadia"
          />
        </div>
      </div>
    </section>
  );
};

export default Intern;
