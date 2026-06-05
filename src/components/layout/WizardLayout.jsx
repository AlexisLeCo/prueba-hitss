import "./WizardLayout.css";

function WizardLayout({ sidebar, children }) {
  return (
    <div className="wizard-layout">
      <aside className="sidebar">{sidebar}</aside>

      <section className="content">{children}</section>
    </div>
  );
}

export default WizardLayout;