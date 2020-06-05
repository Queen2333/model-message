import { Table, Space, Button } from 'antd';
import React from 'react';
import './style.less'

class MessageList extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    title: '序号',
                    dataIndex: 'index',
                    key: 'index',
                },
                {
                    title: '模板ID',
                    dataIndex: 'key',
                    key: 'key',
                },
                {
                    title: '标题',
                    dataIndex: 'title',
                    key: 'title',
                },
                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => (
                        <Space size="middle">
                            <Button type="primary">编辑</Button>
                            <Button type="primary" danger>删除</Button>
                        </Space>
                    )
                },
            ],
            data: [
                {
                    key: '134325445',
                    index: '1',
                    title: 'New York No. 1 Lake Park'
                },
                {
                    key: '278978434',
                    index: '2',
                    title: 'London No. 1 Lake Park'
                },
                {
                    key: '345254566',
                    index: '3',
                    title: 'Sidney No. 1 Lake Park'
                },
            ]
        }
    }

    render () {
        const { columns,data } = this.state
        return (
            <div className="page">
                <Button type="primary" className="add-model">添加模板</Button>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
export default MessageList