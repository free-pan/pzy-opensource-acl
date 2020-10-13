import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';

import styles from './I18nLanguageMgr.less';
import PageTitle from '@/components/PageTitle';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, Button, Input, Form, Table } from 'antd';
import { useTranslation } from 'react-i18next';
import SearchCardExtra from '@/components/SearchCardExtra';
import { exitFullScreen, fullScreen } from '@/utils/FullScreenUtil';
import I18nMgrService from '@/pages/I18nMgr/I18nMgrService';
import AntdUtil from '@/utils/AntdUtil';
import AntdV4DynamicIcon from '@/components/AntdV4DynamicIcon';
import I18nLanguageAdd from './I18nLanguageAdd';
import { useRequestDefaultConfig } from '@/utils/CommConfig';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import I18nLanguageEdit from '@/pages/I18nMgr/I18nLanguage/I18nLanguageEdit';
import { useRequest, useSessionStorageState, useToggle } from 'ahooks';

interface RouteProps {
  /**
   * 当前路由的路径
   */
  path: string;
  /**
   * 路由路径是否需要完全匹配
   */
  exact: boolean;
}

interface i18nLanguageMgrProps {
  route?: RouteProps;
}

const i18nLanguageMgr: React.FC<i18nLanguageMgrProps> = (props) => {
    const [editData, setEditData] = useState<any>();
    const { loading, run, data = { resp: { list: [] } } } = useRequest<any>(
      I18nMgrService.searchLanguage,
      {
        ...useRequestDefaultConfig.searchListConfig,
      },
    );
    const {
      loading: addLoading, run: addRun, data: addResp,
    } = useRequest(
      I18nMgrService.addLanguage,
      {
        ...useRequestDefaultConfig.addEditDelConfig,
        onSuccess(data, param) {
          console.log('success data', data, 'success param', param);
          toggleAddModalVisible();
          run({ kw: '' });
        },
      },
    );
    const {
      loading: editLoading, run: editRun, data: editResp,
    } = useRequest<any>(
      I18nMgrService.editLanguage,
      {
        ...useRequestDefaultConfig.addEditDelConfig,
        onSuccess(data, param) {
          toggleAddModalVisible();
          run({ kw: '' });
        },
      },
    );
    const {
      loading: searchByIdLoading, run: searchByIdRun, data: detailResp,
    } = useRequest<any>(
      I18nMgrService.searchLanguageById,
      {
        ...useRequestDefaultConfig.addEditDelConfig,
        onSuccess(data, param) {
          console.log('success data', data, 'success param', param);
          setEditData(data.resp);
          toggleEditModalVisible();
        },
      },
    );
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const [formData, setFormData] = useSessionStorageState<object>(
      'languageMgr',
      { keyword: '' },
    );
    const { antdColumnMap, columnList } = AntdUtil.columnDefineConvert([
      {
        title: () => t('ui_comm_name'),
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: t('ui:comm:code'),
        dataIndex: 'code',
        key: 'code',
      },
      {
        title: t('ui:comm:edit'),
        dataIndex: 'editTime',
        key: 'editTime',
      },
      {
        title: t('ui:comm:editor'),
        dataIndex: 'editorName',
        key: 'editorName',
      },
    ]);
    const [realAntdColumnArr, setRealAntdColumnArr] = useState<Array<object>>(
      AntdUtil.antdColumnSortByColumnInfo(antdColumnMap, columnList),
    );
    const [tableSize, setTableSize] = useState<SizeType>(undefined);
    const [addModalVisible, { toggle: toggleAddModalVisible }] = useToggle(false);
    const [editModalVisible, { toggle: toggleEditModalVisible }] = useToggle(false);

    // 仅在组件第一次初始化时调用
    useEffect(() => {
      run({ kw: '' });
    }, []);

    const onFullScreenChange = (isFullScreen: boolean) => {
      const dom = document.getElementById('table-panel');
      if (isFullScreen) {
        fullScreen(dom);
      } else {
        exitFullScreen();
      }
    };

    const onFinish = (values: any) => {
      setFormData(values);
      run({ kw: values.keyword });
    };

    const handleAddOk = (values: object) => {
      addRun(values);
    };
    const handleAddCancel = () => {
      toggleAddModalVisible();
    };
    const handleEditOk = (values: object) => {
      editRun(values);
    };
    const handleEditCancel = () => {
      toggleEditModalVisible();
    };
    return (
      <PageContainer title={<PageTitle/>} breadcrumb={{}}>
        <PageTitle pureText={false}/>
        <div id={'table-panel'}>
          <Card>
            <Form
              form={form}
              initialValues={formData}
              className={'winter-search-form-simple'}
              onFinish={onFinish}
            >
              <Row>
                <Col span={16}>
                  <Form.Item
                    label={t('i18n_language_codeOrName')}
                    name="keyword"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                  >
                    <Input placeholder={t('ui_comm_pleaseInput')}/>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item>
                    <Button className={'ML10'}>{t('ui_comm_reset')}</Button>
                    <Button
                      htmlType={'submit'}
                      type={'primary'}
                      className={'ML10'}
                      loading={loading}
                    >
                      {t('ui_comm_search')}
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
          <Card
            className={'MT15'}
            title={<PageTitle/>}
            extra={
              <SearchCardExtra
                columnList={columnList}
                onNew={() => {
                  toggleAddModalVisible();
                }}
                onViewColumnChange={(columnNameList) => {
                  setRealAntdColumnArr(
                    AntdUtil.antdColumnSortByColumnName(
                      antdColumnMap,
                      columnNameList,
                    ),
                  );
                }}
                onFullScreenChange={onFullScreenChange}
                onReload={() => {
                  run({ kw: '', pg: { size: 10, page: 1 } });
                }}
                onDensity={(density) => {
                  setTableSize(density);
                }}
              />
            }
          >
            <AntdV4DynamicIcon iconType={'StepBackwardOutlined'}/>
            <Table
              size={tableSize}
              columns={realAntdColumnArr}
              dataSource={data.resp.list}
              rowKey={(record) => record.id}
              loading={loading}
            />
          </Card>
          <I18nLanguageAdd confirmLoading={addLoading} visible={addModalVisible} onOk={handleAddOk}
                           onCancel={handleAddCancel}/>
          <I18nLanguageEdit confirmLoading={editLoading} visible={editModalVisible} onOk={handleEditOk}
                            onCancel={handleEditCancel} initData={editData}/>
        </div>
      </PageContainer>
    );
  }
;
export default memo(i18nLanguageMgr);
;
