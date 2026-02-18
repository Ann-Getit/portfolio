import { useState } from 'react'
import "./dashboard.css";

import invoicesData from "./invoices.json";
import Customer from "./Customers";
import Country from "./Country";
import Status from "./Status";
import Cards from "./Cards"; 
import Table from "./Table";





//component
const Dashboard = () =>  {

const [invoices, setInvoices] = useState(invoicesData.invoices);
const [filterStatus, setFilterStatus] = useState("all");
const [countryFilter, setCountryFilter] = useState("all");
const [customerFilter, setCustomerFilter] = useState("all");





    console.log(invoices); 
    //console.log(window.innerWidth);



  const filteredInvoices = invoices.filter(inv => {
  const statusMatch = 

  filterStatus === "all" ? true : inv.status.toLowerCase() === filterStatus.toLowerCase();
  const countryMatch = 

  countryFilter === "all" ? true : inv.country.toLowerCase() === countryFilter.toLowerCase();

  const customerMatch =

  customerFilter === "all" ? true : inv.customer.toLowerCase() === customerFilter.toLowerCase();

  return statusMatch && countryMatch && customerMatch;
    });


  const customers = [...new Set(invoices.map(inv => inv.customer))];

return (


   <>
    
  <div className="dashB">

    <h1>Dashboard</h1>

    <div className="dropdowns">

      <Customer customerFilter={customerFilter} setCustomerFilter={setCustomerFilter} customers={customers} />
   
    <Country countryFilter={countryFilter} setCountryFilter={setCountryFilter} />

    <Status filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
    </div>

      <Cards invoices={filteredInvoices} setFilterStatus={setFilterStatus}/>

      <Table filteredInvoices={filteredInvoices} />
  
    </div>
    </>

);
};
export default Dashboard;