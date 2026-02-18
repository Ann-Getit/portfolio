import "./Cards.css";






function Cards({ invoices, setFilterStatus }) {

   const totalInvoices = invoices.length;

     const openInvoices = invoices.filter(inv => inv.status === "Open").length;

    const paidInvoices = invoices.filter(inv => inv.status === "Paid").length;

    const totalCustomers = new Set(invoices.map(inv => inv.customer)).size;
    
    const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  // omzet (alle bedragen optellen)
 

    console.log(openInvoices);
    

    return (

    <div className="stats">

    <div className="card">
      <h3>Total costumers</h3>
      <p>{totalCustomers}</p>
    </div>
    
    <div className="card">
      <h3>Total Revenue</h3>
      <p>€ {totalRevenue}</p>
    </div>

    <div className="card">
      <h3>Total Invoices</h3>
      <p>{totalInvoices}</p> 
     </div>

    <div className="card">
      <h3>Open Invoices</h3>
      <p>{openInvoices}</p>
      </div>

    <div className="card"> 
      <h3>Paid Invoices</h3>
      <p>{paidInvoices}</p>
    </div>

  </div>
    );
}

export default Cards;