// use effect for API
// useState to set Data
// impot axios
// import Ant table
// async/await error handling in use effect
// import { Link } from 'react-router-doc

function Participants() {
  // const [patientData, setPatientData] = useState([]);

  /* Use this with API
  useEffect(()=>{
		const fetchPatientData = async ()=>{
			try{
				const res = await axios.get("http://localhost:3500/")
				setPatientData(res.data);
			}catch(err){
				console.log(err)
			}
		}

		fetchPatientData()
	},[])
  */

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <h1>Hello Style!</h1>
      <p>add a little style here</p>
    </div>
  );
}

export default Participants;
