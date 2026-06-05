import "./WizardLayout.css";

function WizardLayout({sidebar, children}) {
    return (
           <div className="page">
      <header className="header">
        <h1>Tecnología para tu Empresa</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>
      </header>

      <main className="wizard-layout">
        <aside className="sidebar">
          {sidebar}
        </aside>

        <section className="content">
          {children}
        </section>
      </main>
    </div> 
    )
}

export default WizardLayout;