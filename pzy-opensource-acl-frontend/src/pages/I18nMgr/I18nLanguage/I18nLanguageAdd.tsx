import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import { Modal, Form, Input, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';

interface I18nLanguageAddProps {
  /** 点击确定回调 */
  onOk?: (e: object) => void;
  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调 */
  onCancel?: () => void;
  /**
   * 是否可见. 默认:false
   */
  visible: boolean;
  /**
   * 确认按钮是否处于加载中状态
   */
  confirmLoading: boolean
}


const I18nLanguageAdd: React.FC<I18nLanguageAddProps> = (props) => {
  const { visible = false, onOk, onCancel, confirmLoading = false } = props;
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const loadingEffect = useSelector<any>(state => state.loading);
  //const loading = loadingEffect.effects['user/fetchUser'];
  //const user = useSelector(state=>state.user.userInfo)

  // 仅在组件第一次初始化时调用
  useEffect(() => {
    form.resetFields();
  }, [visible]);

  const handleOk = async (e: React.MouseEvent<HTMLElement>) => {
    try {
      const values = await form.validateFields();
      if (onOk) {
        onOk(values);
      }
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    form.resetFields();
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Modal
      title={t('ui_comm_add')}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
    >
      <Form
        form={form}
        initialValues={{ displayPriority: 1, name: 'dd', code: 'dd' }}
      >
        <Form.Item
          label={t('ui_comm_name')}
          name="name"
          rules={[{ required: true, message: t('ui_comm_isMust') }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label={t('ui_comm_code')}
          name="code"
          rules={[{ required: true, message: t('ui_comm_isMust') }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label={t('ui_comm_priority')}
          name="displayPriority"
          rules={[{ required: true, message: t('ui_comm_isMust') }]}
        >
          <InputNumber max={9999}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default memo(I18nLanguageAdd);
