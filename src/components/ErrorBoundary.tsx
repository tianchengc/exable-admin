import { Component } from 'react'
import { Card } from 'antd'

interface ErrorBoundaryProps {
    errorMsg?: ''
    children?: React.ReactNode
}

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
    state = {
        error: false,
    }

    componentDidCatch() {
        console.error(`RenderErrorBoundary ${this.props.errorMsg}`)
        this.setState({ error: true })
    }

    render() {
        const { error } = this.state
        if (!error) {
            // 返回插槽内容，正常渲染
            return this.props.children
        }
        return (
            <Card bodyStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3>页面渲染错误</h3>
                <p className="mt10">您可以尝试<span style={{ color: 'blue', textDecoration: 'underline' }} onClick={() => window.location.reload()}>刷新页面</span></p>
            </Card>
        )
    }
}
