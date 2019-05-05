import React, { Component } from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

@Form.create()
class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 7 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
                md: { span: 10 },
            },
        };
        return (
            <Form>
                <FormItem {...formItemLayout} label="标题">
                    {getFieldDecorator('name', {})(
                        <Input />
                    )}
                </FormItem>
            </Form>
        )
    }
}
export default Editor;