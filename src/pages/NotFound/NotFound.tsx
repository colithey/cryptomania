import { type FC } from 'react';
import style from './NotFound.module.scss';

export interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
    return (
        <div className={style.notFound}>
            <h1 className={style.title}>404</h1>
            <p className={style.message}>Page Not Found</p>
        </div>
    );
}

export default NotFound;
