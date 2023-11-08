import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const DynamicTitle = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        </div>

    );
};

DynamicTitle.propTypes = {
    title: PropTypes.string,
}

export default DynamicTitle;