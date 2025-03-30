import { Layout, Skeleton } from 'antd';
import { ErrorBoundary } from './error-boundary';

interface PageProps {
  title?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = (props) => {
    return (
        <Layout className="page-layout">
            <Layout.Content className="page-content">
                {props.loading ?? false ? (
                    <Skeleton active />
                ) : (
                    <ErrorBoundary>{props.children}</ErrorBoundary>
                )}
            </Layout.Content>
        </Layout>
    );
};