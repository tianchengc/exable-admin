import styles from './PageTitle.module.css';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title
}) => {
  return (
    <>
      <span className={styles.pageTitle}>{ title ?? '' }</span>
    </>
  )
}

export default PageTitle;