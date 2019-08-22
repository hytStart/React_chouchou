import React from 'react';
import ReactDOM from 'react-dom';
import { Column, Table } from 'react-virtualized';
// import { Table } from 'antd'
import { Button } from 'antd'
import 'react-virtualized/styles.css'; // only needs to be imported once

const list = [
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: '啥的范德萨 撒发生大n', description: '撒的发生大范德萨范德萨规范的挂号费的' },
  // And so on...
];

for (let i = 0; i < 3000; i++) {
  list.push({ name: 'Brian Vaughn', description: 'Software engineer' },);
}

const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
  },
  {
    name: 'Description',
    dataIndex: 'description',
  }
]

class Canvas extends React.Component {
  state = {
    value: 1,
  }
    setStateAsync = (state) => {
        return new Promise((resolve) => {
          this.setState(state, resolve)
        });
      }
    testYIbu = async () => {
      await this.setStateAsync({value: 2})
      if (this.state.value === 1) {
        console.log(111)
      } else if (this.state.value === 2) {
        console.log(222)
      }
    }
    render() {
        return (
          <div>
            <Table
              width={300}
              height={300}
              headerHeight={20}
              rowHeight={30}
              rowCount={list.length}
              rowGetter={({ index }) => list[index]}
            >
              <Column
                label='Name'
                dataKey='name'
                width={100}
              />
              <Column
                width={200}
                label='Description'
                dataKey='description'
              />
            </Table>
            {/* <Table columns={columns} dataSource={list} pagination={false} /> */}
            <Button type="primary" onClick={this.testYIbu} />
          </div>
        )
    }
}

export default Canvas
