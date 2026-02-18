import "./Customers.css";


const Customers = ({ customerFilter, setCustomerFilter, customers }) => {


    return (

<div className="customers-filter">
        <label htmlFor="customers">Customer:</label>
        <select
            id="customers"
            value={customerFilter}
            onChange={e => setCustomerFilter(e.target.value)}
            autoComplete="customer"
            >

            <option value="all">All</option>
            {customers.map(c => (
             <option key={c} value={c}>{c}</option>
            ))}
        </select>
</div>
    );
};
export default Customers;
