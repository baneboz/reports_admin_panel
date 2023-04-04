export default function Wizzard() {
  return (
    <section className="progress">
      <div className="progress__line"></div>

      <div className="progress__step progress__step--1 completed">
        <p className="progress__dot">1</p>
        <p className="progress__title">Select candidate</p>
      </div>
      <div className="progress__step progress__step--2 active">
        <p className="progress__dot">2</p>
        <p className="progress__title">Select company</p>
      </div>
      <div className="progress__step progress__step--3 ">
        <p className="progress__dot">3</p>
        <p className="progress__title">Fill report data</p>
      </div>
    </section>
  );
}
