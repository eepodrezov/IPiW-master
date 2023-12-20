import {FC, useEffect, useState} from 'react';
import {Button, Icon, Tabs, Theme, ThemeProvider} from '@gravity-ui/uikit';
import {ArrowLeft, Moon, Sun} from '@gravity-ui/icons';
import {useNavigate} from 'react-router-dom';

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = LIGHT;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

export type AppProps = {
    children: React.ReactNode;
};

export const Wrapper: FC<AppProps> = ({children}) => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
    const [currentTab, setCurrentTab] = useState<string | null>(null);
    useEffect(() => {
        if (currentTab) navigate(`/${currentTab}`);
    }, [currentTab]);

    const isDark = theme === DARK;

    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col items-center justify-around relative gap-5">
                <div className="absolute top-3 left-3 flex gap-2">
                    <Button
                        size="l"
                        view="outlined"
                        onClick={() => {
                            setTheme(isDark ? LIGHT : DARK);
                        }}
                    >
                        <Icon data={isDark ? Sun : Moon} />
                    </Button>
                    <Button size="l" view="outlined" onClick={() => navigate(`/`)}>
                        <Icon data={ArrowLeft} />
                    </Button>
                </div>
                <Tabs
                    activeTab={currentTab || undefined}
                    onSelectTab={(value) => setCurrentTab(value)}
                    items={[
                        {id: 'first', title: 'First Lab'},
                        {id: 'second', title: 'Second Lab'},
                        {id: 'third', title: 'Third Lab'},
                        {id: 'fourth', title: 'Fourth Lab'},
                    ]}
                />
                <div className="">{children}</div>
            </div>
        </ThemeProvider>
    );
};
