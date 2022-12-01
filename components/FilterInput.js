function FilterInput({ Name }) {
  return (
    <div className="relative w-full h-fit z-10 ">
      <select
        className="input border-white py-0 bg-transparent my-3"
        name={Name}
        id={Name}>
        <option value="none">{Name}</option>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
      </select>
      <svg
        className="absolute top-6 right-3 z-0 pointer-events-none"
        width="11"
        height="7"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.52056 6.96921C5.57407 7.03028 5.64568 7.08021 5.72921 7.1147C5.81274 7.1492 5.90569 7.16722 6.00005 7.16722C6.09442 7.16722 6.18737 7.1492 6.2709 7.1147C6.35443 7.08021 6.42604 7.03028 6.47955 6.96921L11.7296 1.01087C11.7903 0.942149 11.826 0.861654 11.8326 0.778134C11.8392 0.694614 11.8166 0.611263 11.7672 0.537137C11.7177 0.463011 11.6434 0.400945 11.5522 0.357683C11.4611 0.314421 11.3566 0.291617 11.2501 0.291749H0.750055C0.643797 0.292093 0.539669 0.315191 0.448868 0.358557C0.358068 0.401922 0.284031 0.463916 0.23472 0.53787C0.185408 0.611825 0.162688 0.694942 0.169002 0.778284C0.175316 0.861625 0.210425 0.942038 0.270555 1.01087L5.52056 6.96921Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default FilterInput;
