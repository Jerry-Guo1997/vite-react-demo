import { Button, ConfigProvider, theme, App as AntdApp } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';

import { FC } from 'react';

import $styles from './app.module.css';

const App: FC = () => {
    return (
        <ConfigProvider
            locale={zhCN}
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#00B96B',
                },
                components: {
                    Layout: {
                        colorBgBody: '',
                    },
                },
            }}
        >
            <StyleProvider hashPriority="high">
                <AntdApp>
                    <div className={$styles.app}>
                        <div className={$styles.container}>
                            欢迎来到3R教室，这是<span>React课程第一节</span>
                            <Button
                                type="primary"
                                className="!bg-lime-400 !text-emerald-900"
                                href="https://pincman.com/3r"
                                target="_blank"
                            >
                                点此打开
                            </Button>
                        </div>
                    </div>
                </AntdApp>
            </StyleProvider>
        </ConfigProvider>
    );
};

export default App;
