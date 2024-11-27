import { FunctionComponent } from 'react'
import { Layout, Skeleton, Spin } from 'antd'
import '../common-style.scss'
import { ErrorBoundary } from './error-boundary'

interface PageProps {
  title?: string
  loading?: boolean
}
export const Page: FunctionComponent<PageProps> = (props) => {
    return <>
        <Layout className="page-layout">
            { props.title && <Layout.Header className="page-header">Ex-able Manage Portal</Layout.Header> }
            <Layout.Content className="page-content">
                {props.loading ?? false ? 
                    <Skeleton active/> : 
                    
                    <ErrorBoundary>
                        { props.children }
                    </ErrorBoundary>}
            </Layout.Content>
        </Layout>
    </>
}
