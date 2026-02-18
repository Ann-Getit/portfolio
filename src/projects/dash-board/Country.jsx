import "./Country.css";




const Country = ({ countryFilter, setCountryFilter }) => {
return (

<div className="country-filter">
    <label htmlFor="country">Country:</label>
    <select
        id="country"
        value={countryFilter}
        onChange={e => setCountryFilter(e.target.value)}
        autoComplete="country"
        >

          <option value="all">All</option>
          <option value="NL">NL</option>
          <option value="FR">FR</option>
          <option value="DE">DE</option>
   </select>
</div>
 );
};
export default Country;