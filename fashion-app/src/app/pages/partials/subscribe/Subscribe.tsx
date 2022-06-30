const Subscribe = () => {
  return (
    <section className="section-subscribe">
      <div className="container">
        <div className="subscribe-list row">
          <div className="col-6 col-sm-12">
            <h3>
              Subscribe to our newsletter andreceive exclusive offers every week
            </h3>
          </div>
          <div className="col-6 col-sm-12">
            <form action="#" className="form-subscribe row">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input col-sm-6"
              />
              <button className="btn btn-primary col-sm-6">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
