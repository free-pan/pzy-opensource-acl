import React, { memo, useEffect } from 'react';
import styles from './Login.less';
import { Button, Checkbox, Col, Form, Input, Row, Tabs } from 'antd';
import {
  LockTwoTone,
  MailTwoTone,
  MobileTwoTone,
  UserOutlined,
} from '@ant-design/icons';
import { Helmet } from 'umi';
import { useTranslation } from 'react-i18next';
import { history } from '@@/core/history';
import { RouteProps } from '@/services/Data';

const { TabPane } = Tabs;

interface LoginProps {
  route: RouteProps;
}

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const Login: React.FC<LoginProps> = (props) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  // 仅在组件第一次初始化时调用
  useEffect(() => {}, []);

  // @ts-ignore
  const onFinish = (values) => {
    console.log(values);
    history.push('/backend/index');
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className={styles.mainBox}>
      <Helmet>
        <title>{t('loginTitle')}</title>
      </Helmet>
      <Tabs defaultActiveKey="1">
        <TabPane tab={t('tabTitleA')} key="1">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            size={'large'}
          >
            <Form.Item
              name="account"
              rules={[{ required: true, message: t('accountErrorMsg') }]}
            >
              <Input
                placeholder={t('accountPlaceholder')}
                prefix={<UserOutlined style={{ color: '#1890ff' }} />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: t('passwordErrorMsg') }]}
            >
              <Input.Password
                placeholder={t('passwordPlaceholder')}
                prefix={<LockTwoTone twoToneColor="#1890ff" />}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>{t('rememberMeText')}</Checkbox>
              <a href={''} className={styles.forgetPwdBtn}>
                {t('forgetPwdText')}
              </a>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button block type="primary" htmlType="submit">
                {t('loginBtnText')}
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab={t('tabTitleB')} key="2">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            size={'large'}
          >
            <Form.Item
              name="account"
              rules={[{ required: true, message: t('accountErrorMsg') }]}
            >
              <Input
                placeholder={t('phonePlaceholder')}
                prefix={<MobileTwoTone twoToneColor="#1890ff" />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: t('passwordErrorMsg') }]}
            >
              <Row style={{ margin: 0 }}>
                <Col span={16} style={{ margin: 0 }}>
                  <Input
                    placeholder={t('validateCodePlaceholder')}
                    prefix={<MailTwoTone twoToneColor="#1890ff" />}
                  />
                </Col>
                <Col span={7} style={{ margin: 0, marginLeft: '5px' }}>
                  <Button>{t('loadValidateCodeBtn')}</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>{t('rememberMeText')}</Checkbox>
              <a href={''} className={styles.forgetPwdBtn}>
                {t('forgetPwdText')}
              </a>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button block type="primary" htmlType="submit">
                {t('loginBtnText')}
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
      <a href={'/page/register'} className={styles.registerBtn}>
        {t('registerBtnText')}
      </a>
    </div>
  );
};
export default memo(Login);
