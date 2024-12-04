// import { Link } from 'react-router-doc
// TO DO: search filter on name
// TO DO: Styling
import { useRef, useState } from 'react';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import { Button, Input, Space, Table, DatePicker, Avatar } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

function Participants() {
  interface DataType {
    id: number;
    img: string;
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
      img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
      name: 'Bruce Waye',
      age: 23,
      chronic_condition: 'chronic diesease',
      caat: 0.7,
      mmrc: 1,
      memberSince: '01-02-2017',
    },
    {
      id: 2,
      img: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Jack',
      name: 'Ichigo Kurosaki',
      age: 39,
      chronic_condition: 'chronic diesease',
      caat: 0.7,
      mmrc: 1,
      memberSince: '01-02-2017',
    },
    {
      id: 3,
      img: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Easton',
      name: 'John Doe',
      age: 53,
      chronic_condition: 'chronic diesease',
      caat: 0.7,
      mmrc: 1,
      memberSince: '01-02-2017',
    },
    {
      id: 4,
      img: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Emery',
      name: 'Oliver Khan',
      age: 89,
      chronic_condition: 'chronic diesease',
      caat: 0.7,
      mmrc: 1,
      memberSince: '01-02-2017',
    },
    {
      id: 5,
      img: 'https://api.dicebear.com/9.x/notionists/svg?seed=Easton',
      name: 'John Wick',
      age: 55,
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
          {/* Filter Button
          <Button
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
    // HIGH LIGHT TEXT logic...need to install react-highlight-words
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
      title: '',
      dataIndex: 'img',
      key: 'img',
      render: (text: string, record: DataType) => {
        console.log(`trying to get src ${record.img}`);
        return (
          <Avatar size="large" src={record.img}>
            IMG
          </Avatar>
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text: string, record: DataType) => {
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
      ...getColumnSearchProps('name'),
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
      width: '20%',
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
      width: '20%',
    },
  ];

  return (
    <div className="flex-relative flex-col gap-4 justify-center w-full p-4">
      <div className="flex justify-between">
        <h1>Patients</h1>
        <DatePicker.RangePicker />
      </div>
      <Table<DataType> dataSource={mockData} columns={columns} />;
    </div>
  );
}

export default Participants;

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
