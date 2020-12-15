import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';

import SectionHeader from 'components/SectionHeader';
import PageSection from 'components/PageSection';
import GalleryItem from './GalleryItem';
import GalleryModal from './modal';
import GalleryCarousel from './carousel';
import './Gallery.scss';

const Gallery = ({ frontmatter, images }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalCurrent, setModalCurrent] = useState(0);
  
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
    <PageSection id={anchor} className="gallery-section pb-0" fluid containerClassName="gallery-container container-xxl">
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
                  image={{ alt, src: images[index].sm }}
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
                  xl: images[index].xl,
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
  frontmatter: PropTypes.object,
  images: PropTypes.arrayOf(PropTypes.shape({
    sm: PropTypes.object,
    xl: PropTypes.object,
  })).isRequired,
};

Gallery.defaultProps = {
  frontmatter: null,
};

export default Gallery;
