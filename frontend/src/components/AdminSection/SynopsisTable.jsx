import React, { useState, useEffect } from "react";
import { Table, Tag, Input, Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
// import BrandOne from "../images/brand/brand-01.svg"; // Import other brand images as needed
// import "./ApplicantTable.css";
import "./Dissertation.css";
import { useLocation } from "react-router-dom";
import SynopsisViewMore from "../SynopsisViewMore";
// import EditApplicant from "./EditApplicant";

const SynopsisTable = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [data, setData] = useState([]);
  const location = useLocation();

  // const title = location.pathname.split("/")[0];

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
      const res = await axios.get("/api/idea/getIdea");
      // console.log(res.data);
      setData(res.data);
      console.log(res.data);
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
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            className="rounded bg-primary px-4 py-2 text-black"
          >
            OK
          </Button>
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
      title: "Student",
      dataIndex: "studentname",
      ...getColumnSearchProps("studentname", "Student"),
      className: "bg-white p-2.5 text-black text-sm font-medium uppercase",
    },
    {
      title: "Title",
      dataIndex: "title",
      ...getColumnSearchProps("title", "Title"),
      className: "bg-white p-2.5 text-black text-sm font-medium uppercase",
    },
    {
      title: "Preferred Guide",
      dataIndex: "guideName",
      // defaultSortOrder: 'descend',
      ...getColumnSearchProps("guideName", "Preferred Guide"),

      className: "bg-white   text-black hover:bg-unset text-center p-2.5",
    },
    {
      title: "FieldofInterest",
      dataIndex: "fieldOfInterest",
      // ...getColumnSearchProps("University", "university"),
      className: "bg-white  text-black  p-2.5 text-center",
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        {
          text: "ongoing",
          value: "ongoing",
        },
        {
          text: "completed",
          value: "completed",
        },
        {
          text: "rejected",
          value: "rejected",
        },
        {
          text: "revised",
          value: "revised",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (status) => {
        let color = "";
        switch (status) {
          case "ongoing":
            color = "blue";
            break;
          case "rejected":
            color = "yellow";
            break;
          case "completed":
            color = "green";
            break;
          case "revised":
            color = "red";
            break;
          default:
            color = "";
        }
        return (
          <Tag color={color} key={status}>
            {status}
          </Tag>
        );
      },
      className: "bg-white bg-black p-2.5 text-center",
    },
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
    {
      title: "Details",
      dataIndex: "viewMore",
      render: (_, record) => <SynopsisViewMore data={record} />,
      className: "bg-black text-white bg-white p-2.5 text-center",
    },
  ];

  const handleViewMore = (record) => {
    // Implement logic to handle "View More" button click
    console.log("View More Clicked for:", record);
  };

  // // Generate serial numbers and modify the data
  const dataWithSrNo = data
    ? data.map((item, index) => ({
        ...item,
        key: (index + 1).toString(),
        sr: index + 1,
      }))
    : [];

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

export default SynopsisTable;
