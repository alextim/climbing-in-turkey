import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Image from 'components/Image';
import GalleryDetailDialog from 'components/GalleryDetailDialog';

import './GalleryItem.scss';
import PlusIcon from '../assets/icons/plus.svg';



const iconStyle = {
  width: '2rem',
  height: '2rem',
};

const GalleryItem = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  imageFileNameDetail,
  imageAltDetail,
  extraInfo,
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <>
      <Col md={4} sm={6} className="portfolio-item">
        <a
          role="button"
          tabIndex={-1}
          className="portfolio-link"
          data-toggle="modal"
          onClick={handleShowDetail}
        >
          <Image
            className="img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <PlusIcon style={iconStyle}/>
            </div>
          </div>
        </a>
        <div className="portfolio-caption">
          <h4>{header}</h4>
          {subheader ? <p className="text-muted">{subheader}</p> : null}
        </div>
      </Col>
      <GalleryDetailDialog
        show={showDetail}
        onHide={handleHideDetail}
        imageFileName={imageFileNameDetail || imageFileName}
        imageAlt={imageAltDetail || imageAlt}
        header={header}
        subheader={subheader}
        content={content}
        extraInfo={extraInfo}
      />
    </>
  );
};

GalleryItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  content: PropTypes.string,
  imageFileNameDetail: PropTypes.string,
  imageAltDetail: PropTypes.string,
  extraInfo: PropTypes.any,
};

GalleryItem.defaultProps = {
  imageAlt: '',
  subheader: '',
  content: '',
  imageFileNameDetail: '',
  imageAltDetail: '',
  extraInfo: null,
};

export default GalleryItem;
