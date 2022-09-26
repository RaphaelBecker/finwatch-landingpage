import Card from "../components/ui/Card.js";

function LandingPage() {
  return (
    <>
      <section>
        <h1>This is LandingPage</h1>
      </section>

      <Card>
        <div className="container">
          <h2>This is a card</h2>
        </div>
      </Card>

      <Card>
        <div className="container">
          <h2>This is a card</h2>
        </div>
      </Card>
    </>
  );
}
export default LandingPage;
