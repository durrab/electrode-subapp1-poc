import { React, getBrowserHistory } from "subapp-react";
import { reduxLoadSubApp } from "subapp-redux";
import { withRouter } from "react-router";
import { Router, Route, Switch, Link } from "react-router-dom";
import { createStore } from "redux";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Calendar, Layout, message, Modal, Menu, Breadcrumb, Divider } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";
const { Header, Content, Footer, Sider } = Layout;
import { MessageOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;

  return [year, month, day].join('-');
}

const ListVehicles = props => {

  console.log(`search type = ${JSON.stringify(props)}`);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Time',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: 'VIN',
      dataIndex: 'vin',
      key: 'vin',
    },
    {
      title: 'Model Year',
      dataIndex: 'modelYear',
      key: 'modelYear',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    }
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const [dataSource,setDataSource] = useState(undefined);
  useEffect(async () => {
    const res = await axios.get("/api/cars");
    setDataSource(res.data.map(item => {
      const data = item;
      data.time = formatDate(new Date(data.time));
      return data;
    }));
  },[]);
  return (

      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ margin: "0 16px" }}>
          <MessageOutlined style={{ fontSize: "16px", color: "#08c" }} />
          <div className="site-layout-content">
          {dataSource && <Table columns={columns} dataSource={dataSource} onChange={onChange} />}
          </div>
        </Content>
      </Layout>

  );
};

const SearchVehicles = props => {
  const { search } = props;
  console.log(`search type = ${search}`);
  return <div>Search Vehicles by {search}</div>;
};

const Vehicle = props => {
  return (
    <Switch>
      <Route path="/vehicle" exact component={() => <div>Vehicle Home Page</div>} {...props} />
      <Route path="/vehicle/list" component={() => <ListVehicles {...props} imagesData={[]} />} />
      <Route
        path="/vehicle/search/vin"
        component={() => <SearchVehicles search="vin" {...props} />}
      />
      <Route
        path="/vehicle/search/imei"
        component={() => <SearchVehicles search="imei" {...props} />}
      />
    </Switch>
  );
};

const Component = withRouter(
  connect(
    state => state,
    dispatch => ({ dispatch })
  )(Vehicle)
);

export default reduxLoadSubApp({
  name: "Vehicle",
  useReactRouter: true,
  Component,
  StartComponent: props => {
    return (
      <>
        <Router history={getBrowserHistory()}>
          <Component {...props} />
        </Router>
      </>
    );
  },
  reduxCreateStore: initialState => {
    return createStore(s => s, initialState);
  }
});
