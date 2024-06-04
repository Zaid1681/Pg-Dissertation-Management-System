import React, { useState, useEffect } from "react";
import { Table, Tag, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
// import BrandOne from "../images/brand/brand-01.svg"; // Import other brand images as needed
// import "./ApplicantTable.css";
import "./Dissertation.css";
import { useLocation } from "react-router-dom";
// import EditApplicant from "./EditApplicant";

const StudentsTable = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [data, setData] = useState([]);
  const location = useLocation();

  // const title = location.pathname.split("/")[0];
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title");
  // console.log("-->", title);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`api/dissertation/get?title=${title}`);
      // console.log(res.data);
      setData(res.data);
      // console.log(res.data);
    };
    // fetchVideo();
    fetchData();
  }, []);

  const getColumnSearchProps = (dataIndex, columnTitle) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div className="p-4">
        <Input
          placeholder={`Search ${columnTitle}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          className="mb-2"
        />
        <Space>
          <button
            onClick={() => handleReset(clearFilters)}
            className="bg-gray-200 text-gray-800 mr-2 rounded px-4 py-2"
          >
            Reset
          </button>
          <button
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            className="rounded bg-primary px-4 py-2 text-white"
          >
            OK
          </button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <strong>{text}</strong>
      ) : (
        <span>{text}</span>
      ),
  });

  const columns = [
    {
      title: "Sr no",
      dataIndex: "sr",
      defaultSortOrder: "descend",
      className: "bg-white  p-2.5 text-black text-sm font-medium uppercase",
    },
    {
      title: "Title",
      dataIndex: "title",
      // ...getColumnSearchProps("Title", "Title"),
      className: "bg-white p-2.5 text-black text-sm font-medium uppercase",
    },
    {
      title: "Department",
      dataIndex: "department",
      // defaultSortOrder: 'descend',
      // ...getColumnSearchProps('gender', 'Genders'),

      className: "bg-white   text-black hover:bg-unset text-center p-2.5",
    },
    {
      title: "University",
      dataIndex: "university",
      // ...getColumnSearchProps("University", "university"),
      className: "bg-white  text-black  p-2.5 text-center",
    },
    {
      title: "Researcher",
      dataIndex: "researcher",
      // ...getColumnSearchProps("University", "university"),
      className: "bg-white  text-black  p-2.5 text-center",
    },
    // {
    //   title: "Status",
    //   dataIndex: "Status",
    //   filters: [
    //     {
    //       text: "New",
    //       value: "New",
    //     },
    //     {
    //       text: "Ongoing",
    //       value: "Ongoing",
    //     },
    //     {
    //       text: "Completed",
    //       value: "Completed",
    //     },
    //     {
    //       text: "Rejected",
    //       value: "Rejected",
    //     },
    //   ],
    //   onFilter: (value, record) => record.Status.indexOf(value) === 0,
    //   render: (Status) => {
    //     let color = "";
    //     switch (Status) {
    //       case "Ongoing":
    //         color = "blue";
    //         break;
    //       case "New":
    //         color = "yellow";
    //         break;
    //       case "Completed":
    //         color = "green";
    //         break;
    //       case "Rejected":
    //         color = "red";
    //         break;
    //       default:
    //         color = "";
    //     }
    //     return (
    //       <Tag color={color} key={Status}>
    //         {Status}
    //       </Tag>
    //     );
    //   },
    //   className: "bg-white bg-black p-2.5 text-center",
    // },
    // {
    //   title: "Rounds",
    //   dataIndex: "Round",
    //   filters: [
    //     {
    //       text: "Round-1 Scheduled ",
    //       value: "Round-1 Scheduled",
    //     },
    //     {
    //       text: "Round-2 Scheduled",
    //       value: "Round-2 Scheduled",
    //     },
    //     {
    //       text: "Round-1 Completed",
    //       value: "Round-1 Completed",
    //     },
    //     {
    //       text: "Round-2 Completed",
    //       value: "Round-2 Completed",
    //     },
    //   ],
    //   onFilter: (value, record) => record.Round.indexOf(value) === 0,
    //   render: (Round) => {
    //     let color = "";
    //     switch (Round) {
    //       case "Round -1 Ongoing":
    //         color = "cyan";
    //         break;
    //       case "Round -2 Ongoing":
    //         color = "blue";
    //         break;
    //       case "Completed":
    //         color = "green";
    //         break;
    //       case "Rejected":
    //         color = "red";
    //         break;
    //       default:
    //         color = "";
    //     }
    //     return (
    //       <Tag color={color} key={Round}>
    //         {Round}
    //       </Tag>
    //     );
    //   },
    //   className: "bg-white bg-black text-center ",
    // },
    // {
    //   title: "Applied Date",
    //   dataIndex: "Date",
    //   render: (_, record) => <h1>21 / Nov / 2023</h1>,
    //   className: "bg-black text-white bg-white p-2.5 text-center",
    // },
    // {
    //   title: "Details",
    //   dataIndex: "viewMore",
    //   render: (_, record) => <EditApplicant data={record} />,
    //   className: "bg-black text-white bg-white p-2.5 text-center",
    // },
  ];

  const handleViewMore = (record) => {
    // Implement logic to handle "View More" button click
    console.log("View More Clicked for:", record);
  };

  // // Generate serial numbers and modify the data
  const dataWithSrNo = data.map((item, index) => ({
    ...item,
    key: (index + 1).toString(), // Assigning unique key for Ant Design Table
    sr: index + 1, // Adding the serial number
  }));

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="rounded-sm border border-stroke  px-5 pt-6 pb-2.5 text-white  shadow-default dark:border-strokedark  dark:text-white sm:px-7.5 xl:pb-1">
      <Table
        className=" text-black dark:text-white"
        columns={columns}
        dataSource={dataWithSrNo} // Use modified data here
        onChange={onChange}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default StudentsTable;
