import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'dva';
import * as Icon from '@ant-design/icons';

interface AntdV4DynamicIconProps {
  iconType: string;
}

const AntdV4DynamicIcon: React.FC<AntdV4DynamicIconProps> = (props) => {
  const { iconType } = props;
  console.log('Icon', Icon);
  return (
    <>
      {React.createElement(Icon[iconType], {
        style: { fontSize: '16px', color: '#08c' },
      })}
    </>
  );
};
export default memo(AntdV4DynamicIcon);
