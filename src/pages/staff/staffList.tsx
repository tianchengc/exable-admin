import { useRef, useState } from 'react';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import { Button, Input, Space, Table, Avatar } from 'antd';
import { SearchOutlined, CloseOutlined, MailOutlined } from '@ant-design/icons';

function StaffList() {
  interface DataType {
    id: number;
    img: string;
    name: string;
    profession: string;
    phone: number;
    email: string;
  }

  type DataIndex = keyof DataType;

  const [mockData, setMockData] = useState<DataType[]>([
    {
      id: 1,
      img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
      name: 'Bruce Waye',
      profession: 'CRE',
      phone: 647888999,
      email: 'bruce.wayne@exable.com',
    },
    {
      id: 2,
      img: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Jack',
      name: 'Ichigo Kurosaki',
      profession: 'physiotherapist',
      phone: 647888999,
      email: 'ichigo.kurosaki@exable.com',
    },
    {
      id: 3,
      img: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Easton',
      name: 'John Doe',
      profession: 'cinesiologist',
      phone: 647888999,
      email: 'john.doe@exable.com',
    },
    {
      id: 4,
      img: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Emery',
      name: 'Oliver Khan',
      profession: 'pulmonologist',
      phone: 647888999,
      email: 'oliver.khan@exable.com',
    },
    {
      id: 5,
      img: 'https://api.dicebear.com/9.x/notionists/svg?seed=Easton',
      name: 'John Wick',
      profession: 'cardiologist',
      phone: 647888999,
      email: 'john.wick@exable.com',
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const staffCount = mockData.length;
  console.log(staffCount);

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
            style={{
              width: 90,
            }}
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
      width: 96,
      render: (text: string, record: DataType) => {
        console.log(`trying to get src ${record.img}`);
        return (
          <Avatar size={64} src={record.img}>
            IMG
          </Avatar>
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
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
      title: 'Profession',
      dataIndex: 'profession',
      key: 'profession',
      width: '20%',
      filters: [
        { text: 'CRE', value: 'CRE' },
        { text: 'Ontologist', value: 'Ontologist' },
        { text: 'Cinesiologist', value: 'cinesiologist' },
        { text: 'Pulmonologist', value: 'pulmonologist' },
        { text: 'Cardiologist', value: 'cardiologist' },
      ],
      onFilter: (value, record) => {
        return record.profession === value;
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '',
      dataIndex: 'email',
      key: 'email',
      render: (text: string, record: DataType) => {
        return (
          <a
            onClick={() => {
              console.log(`email to participant`);
            }}
          >
            <MailOutlined className="text-secondary-color text-2xl" />
          </a>
        );
      },
    },
  ];

  return (
    <div className="bg-background-color flex-relative flex-col gap-4 justify-center w-full p-8 overflow-y-scroll">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-primary-color">Staff</h1>
        <p>Total Staff: {staffCount}</p>
      </div>
      <Table<DataType> dataSource={mockData} columns={columns} />
    </div>
  );
}

export default StaffList;

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
