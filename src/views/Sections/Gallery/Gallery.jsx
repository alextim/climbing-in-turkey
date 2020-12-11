import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Row from 'react-bootstrap/Row';

import SectionHeader from 'components/SectionHeader';
import GalleryItem from 'components/GalleryItem';
import PageSection from 'components/PageSection/PageSection';
import GalleryModal from './modal';
import GalleryCarousel from './carousel';
import './Gallery.scss';

const Gallery = ({ className, frontmatter }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalCurrent, setModalCurrent] = useState(0);
  
  if (!frontmatter) {
    return null;
  }
  const setModal = (show, index) => {
    setModalCurrent(index);
    setModalShow(show);
  };

  const handleGalleryClick = (e, index) => {
    e.preventDefault();
    setModal(true, index);
  };


  
  const { anchor, header: rootHeader, subheader: rootSubHeader, gallery } = frontmatter;

  return (
    <PageSection id={anchor} className={clsx('gallery-section', className)} fluid containerClassName="gallery-container p-0">
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      { gallery &&
        <>
          <Row noGutters>
            {gallery.map(
              ({ header, subheader, image }, index) => (
                <GalleryItem
                  key={header}
                  header={header}
                  subheader={subheader}
                  image={image}
                  index={index}
                  handleGalleryClick={handleGalleryClick}
                />
              ),
            )}
          </Row>
          <GalleryModal show={modalShow} onHide={() => setModal(false, 0)}>
            <GalleryCarousel items={gallery} current={modalCurrent} />
          </GalleryModal>
        </>
      }
    </PageSection>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Gallery.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Gallery;
