import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Row from 'react-bootstrap/Row';

import SectionHeader from 'components/SectionHeader';
import PageSection from 'components/PageSection';
import GalleryItem from './GalleryItem';
import GalleryModal from './modal';
import GalleryCarousel from './carousel';
import './Gallery.scss';

const Gallery = ({ className, frontmatter, images }) => {
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

  const { anchor, header: rootHeader, subheader: rootSubHeader, items } = frontmatter;

  return (
    <PageSection id={anchor} className={clsx('gallery-section', className)} fluid containerClassName="gallery-container p-0">
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      { items &&
        <>
          <Row noGutters>
            {items.map(
              ({ header, subheader, alt }, index) => (
                <GalleryItem
                  key={header}
                  header={header}
                  subheader={subheader}
                  image={{ alt, default: images[index].default }}
                  index={index}
                  handleGalleryClick={handleGalleryClick}
                />
              ),
            )}
          </Row>
          <GalleryModal show={modalShow} onHide={() => setModal(false, 0)}>
          <GalleryCarousel
            items={
              items.map(({ alt }, index) => {
                return {
                  alt,
                  desktop: images[index].desktop,
                };
              }) 
            }
            current={modalCurrent} 
          />
          </GalleryModal>
        </>
      }
    </PageSection>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
  images: PropTypes.arrayOf(PropTypes.shape({
    default: PropTypes.object,
    desktop: PropTypes.object,
  })).isRequired,
};

Gallery.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Gallery;
