// use effect for API
// useState to set Data
// impot axios
// import Ant table
// async/await error handling in use effect
// import { Link } from 'react-router-doc
import { Table, DatePicker } from 'antd';

function Participants() {
  const mockData = [
    {
      id: 1,
      name: 'batman',
      age: 23,
      chronic_condition: 'chronic diesease',
      caat: 0.7,
      mmrc: 1,
      memberSince: '01-02-2017',
    },
    {
      id: 2,
      name: 'Fuzzy Wuzzy',
      age: 39,
      chronic_condition: 'chronic diesease',
      caat: 0.7,
      mmrc: 1,
      memberSince: '01-02-2017',
    },
    {
      id: 3,
      name: 'John Doe',
      age: 53,
      chronic_condition: 'chronic diesease',
      caat: 0.7,
      mmrc: 1,
      memberSince: '01-02-2017',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: { id: string }) => {
        return (
          <a
            onClick={() => {
              console.log(`/participants/${record.id}`);
            }}
          >
            {text}
          </a>
        );
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Chronic Condition',
      dataIndex: 'chronic_condition',
      key: 'chronic_condition',
    },
    {
      title: 'CAAT',
      dataIndex: 'caat',
      key: 'caat',
    },
    {
      title: 'mMRC',
      dataIndex: 'mmrc',
      key: 'mmrc',
    },
    {
      title: 'Member Since',
      dataIndex: 'memberSince',
      key: 'memberSince',
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="flex gap-20">
        <h1>Hello Style!</h1>
        <DatePicker.RangePicker />
      </div>
      <Table dataSource={mockData} columns={columns} pagination={true} />;
    </div>
  );
}

export default Participants;

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
