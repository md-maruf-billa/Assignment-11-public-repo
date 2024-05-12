import React from 'react';
import {Helmet} from "react-helmet";
const PageTitle = ({pgTitle}) => {
    return (
        <Helmet>
            <title>H.H.H || {pgTitle}</title>
        </Helmet>
    );
};

export default PageTitle;