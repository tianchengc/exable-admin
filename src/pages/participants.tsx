// use effect for API
// useState to set Data
// impot axios
// import Ant table
// async/await error handling in use effect
// import { Link } from 'react-router-doc
// TO DO: search filter on name
// TO DO: Styling
import { useRef, useState } from 'react';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import { Button, Input, Space, Table, DatePicker } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

function Participants() {
  interface DataType {
    id: number;
    name: string;
    age: number;
    chronic_condition: string;
    caat: number;
    mmrc: number;
    memberSince: string;
  }

  type DataIndex = keyof DataType;

  const [mockData, setMockData] = useState<DataType[]>([
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
      name: 'Fuzzy Wuzzy Waksuud Muzzy',
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
    {
      id: 4,
      name: 'Abaraham Doe',
      age: 89,
      chronic_condition: 'chronic diesease',
      caat: 0.7,
      mmrc: 1,
      memberSince: '01-02-2017',
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (
    clearFilters: () => void,
    confirm: FilterDropdownProps['confirm'],
  ) => {
    console.log({ clearFilters });
    clearFilters();
    confirm();
    setSearchText('');
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex,
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
            confirm({ closeDropdown: false });
          }}
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters, confirm)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
          <Button
            type="link"
            size="small"
            color="default"
            icon={<CloseOutlined />}
            onClick={() => {
              close();
            }}
          ></Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    // render: text =>
    //   searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //       searchWords={[searchText]}
    //       autoEscape
    //       textToHighlight={text ? text.toString() : ''}
    //     />
    //   ) : (
    //     text
    //   ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
      // filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
      //   return (
      //     <div className="p-2">
      //       <Input
      //         style={{ marginBottom: 8, display: 'block' }}
      //         size="small"
      //         autoFocus
      //         placeholder="Search Name..."
      //         value={selectedKeys[0]}
      //         onChange={e => {
      //           setSelectedKeys(e.target.value ? [e.target.value] : []);
      //         }}
      //         onPressEnter={() => {
      //           confirm();
      //           console.log('press enter');
      //         }}
      //       />
      //       <Space>
      //         <Button type="primary" size="small" style={{ width: 90 }}>
      //           Search
      //         </Button>
      //         <Button
      //           type="default"
      //           size="small"
      //           onClick={() => {
      //             handleReset;
      //           }}
      //           style={{ width: 90 }}
      //         >
      //           Reset
      //         </Button>
      //         <Button
      //           type="link"
      //           color="default"
      //           size="small"
      //           icon={<CloseOutlined />}
      //           onClick={() => {
      //             filterDropdown(false);
      //           }}
      //         ></Button>
      //       </Space>
      //     </div>
      //   );
      // },
      // filterIcon: () => {
      //   return <SearchOutlined />;
      // },
      // onFilter: (value, record) => {
      //   return record.name.toLowerCase().includes(value.toLowerCae());
      // },
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.name.localeCompare(b.name),
      // render: (text: string, record: { id: string }) => {
      //   return (
      //     <a
      //       onClick={() => {
      //         console.log(`/participants/${record.id}`);
      //       }}
      //     >
      //       {text}
      //     </a>
      //   );
      // },
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
    <div className="relative flex min-h-screen flex-col m-auto justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="flex gap-20">
        <h1>Hello Style!</h1>
        <DatePicker.RangePicker />
      </div>
      <Table<DataType> dataSource={mockData} columns={columns} />;
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
