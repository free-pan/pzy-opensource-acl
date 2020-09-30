import React, { memo, useEffect, useState } from 'react';
import styles from './Index.less';
import { RouteProps } from '@/services/Data';

interface IndexProps {
  route: RouteProps;
}

const Index: React.FC<IndexProps> = (props) => {
  // 仅在组件第一次初始化时调用
  useEffect(() => {}, []);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};
export default memo(Index);
