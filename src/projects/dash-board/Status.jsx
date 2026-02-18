import "./Status.css";





const Status = ({ setFilterStatus, filterStatus}) => {
    return (

    
    <div className="status-filter"> 
    <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={filterStatus}
        onChange={e => setFilterStatus(e.target.value)}
        autoComplete="status"
      >
        <option value="all">All</option>
        <option value="paid">Paid</option>
        <option value="open">Open</option>
      </select>
    </div>
    );
};

export default Status;