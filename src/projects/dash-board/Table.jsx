import "./Table.css";
import { useEffect, useRef, useState } from "react";




   function Table({ filteredInvoices }) {
  const scrollRef = useRef(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setShowHint(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

    return (
    


<div className="table-container">
<div className="scroll" ref={scrollRef}>
<table className="table">
      <thead className="thead">
        <tr>
        <th>Id</th>
        <th>Costumer</th>
        <th>Amount</th>
        <th>VatRate</th>
        <th>Country</th>
        <th>Date</th>
        <th>Status</th>
        </tr>
      </thead>



    <tbody>

      {filteredInvoices.length === 0 ? (
    <tr>
      <td colSpan="7">No invoices found</td>
    </tr>
  ) : (
    filteredInvoices.map(inv => (
        <tr key={inv.id}>
          <td>{inv.id}</td>
          <td>{inv.customer}</td>
          <td>€ {inv.amount}</td>
          <td>{inv.vatRate}%</td>
          <td>{inv.country}</td>
          <td>{inv.date}</td>
          <td>{inv.status}</td>
        </tr>
        ))
        )}
      </tbody>
   </table>
    {showHint && <div className="scroll-hint"> ← scroll → </div>}
   </div>

   
    </div>
    
   );
}

export default Table;